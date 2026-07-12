// Define as "coleções de conteúdo" do site: notícias, professoras e modalidades.
// Cada arquivo .md dentro das pastas em src/content/ vira um item da coleção.
// O "schema" valida os campos do topo de cada arquivo (frontmatter) -
// se um campo obrigatório faltar, o build avisa com erro claro.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
    resumo: z.string().optional(),
    imagem: z.string().optional(),
  }),
});

const professoras = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/professoras' }),
  schema: z.object({
    nome: z.string(),
    especialidade: z.string().optional(),
    foto: z.string().optional(),
    // "ordem" controla a posição na página (menor aparece primeiro)
    ordem: z.number().default(0),
  }),
});

const modalidades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/modalidades' }),
  schema: z.object({
    nome: z.string(),
    professora: z.string().optional(),
    ritmo: z.string().optional(),
    resumo: z.string(),
    imagem: z.string().optional(),
    ordem: z.number().default(0),
  }),
});

export const collections = { noticias, professoras, modalidades };
