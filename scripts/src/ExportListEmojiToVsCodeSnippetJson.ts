import { createInterface } from 'readline';
import fs from 'fs';
import { EmojiConvertor } from 'emoji-js';

const inputFile = 'src/../../emojis_pt_br.md';

const outputFileSnippetJson =
  '/home/marcos/.config/Code/User/snippets/git-commit.json';

const rl = createInterface({
  input: fs.createReadStream(inputFile),
  output: process.stdout,
  terminal: false,
});

const array = Array<string>();
rl.on('line', (text) => array.push(text));

const regex = /(?:\|)(.+)(?:\|).(\:\w+\:)(?:.+)/;
const regexParentesesColchetes = /(?:\(|\[)([\s\w\À-\ú\/\,\.\-\:]+)(?:\)|\])/g;
const objectJsonList = Array<Array<string>>();

rl.on('close', () => {
  console.log(array);

  let matchesEncontrados = 0;
  array.forEach((linha) => {
    const lineMatch = linha.match(regex);
    // console.log('match', match);
    if (lineMatch) {
      matchesEncontrados++;
      const emoji = new EmojiConvertor();
      emoji.replace_mode = 'unified';
      emoji.allow_native = true;

      const description = lineMatch[1].trim();
      const figura = emoji.replace_colons(lineMatch[2].trim());
      const code = lineMatch[2].trim();
      const parentesesInDescription = description.matchAll(
        regexParentesesColchetes
      );

      let body = description;
      let numeroDoSifrao = 1;
      if (parentesesInDescription) {
        for (let elemento of parentesesInDescription) {
          console.log(elemento);

          const [matchComplet, group] = elemento;

          if (matchComplet.charAt(0) === '(') {
            body = `${body.replace(
              matchComplet,
              '${' + `${numeroDoSifrao++}:${group}` + '}'
            )}`;
          } else {
            console.log(group);
            body = `${body.replace(
              matchComplet,
              '${' +
                `${numeroDoSifrao++}|${group
                  .trim()
                  .replace(/\//, ',')
                  .replace(/\s/g, '')}|` +
                '}'
            )}`;
          }
        }
      }

      const numeroDaDescricao = () => {
        return ('00' + matchesEncontrados).slice(-2);
      };

      const obj =
        `\t"${figura}  ${description}": {\n` +
        `\t\t"prefix": "${numeroDaDescricao()} ${figura}\\t${description}",\n` +
        `\t\t"body": "${code}\\t${body} $${numeroDoSifrao++}\\n\\n$0"\n` +
        `\t},\n` +
        `\t"${figura}  ${code}": {\n` +
        `\t\t"prefix": "${numeroDaDescricao()} ${figura}\\t${code}",\n` +
        `\t\t"body": "${code}$0"\n` +
        `\t},\n`;

      objectJsonList.push([description, figura, code, obj]);
    }
  });

  let snippetJson = '{\n';
  objectJsonList.forEach((e) => (snippetJson += e[3]));
  console.log(snippetJson);
  snippetJson += '}';
  fs.writeFileSync(outputFileSnippetJson, snippetJson);
});
