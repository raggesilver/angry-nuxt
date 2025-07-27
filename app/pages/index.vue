<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CoffeeIcon,
  ComponentIcon,
  DatabaseIcon,
  GithubIcon,
  GlobeIcon,
  PenToolIcon,
  SearchIcon,
  SpellCheck2Icon,
} from "lucide-vue-next";
import { useForm } from "vee-validate";
import { z } from "zod";

defineOgImageComponent("NuxtSeo");

useHead({
  titleTemplate: (str) => (str ? `${str} | Angry Nuxt` : "Angry Nuxt"),
  meta: [
    {
      name: "description",
      content:
        "A Nuxt.js starter template with UnoCSS, Shadcn Vue, Drizzle ORM, Postgres, and more.",
    },
  ],
});

const schema = z.object({
  name: z
    .string()
    .min(
      2,
      "Name must be at least 2 characters. This is a custom error message.",
    ),
  tos: z
    .boolean()
    .refine((value) => value, "You must accept the terms of service."),
});

const validationSchema = toTypedSchema(schema);

const form = useForm({
  validationSchema,
  initialValues: {
    name: "",
    tos: false,
  },
});

const onSubmit = form.handleSubmit((values) => {
  alert(JSON.stringify(toRaw(values), null, 2));
});

const colors = [
  "bg-red-300",
  "bg-red-400",
  "bg-red-500",
  "bg-red-600",

  "bg-emerald-300",
  "bg-emerald-400",
  "bg-emerald-500",
  "bg-emerald-600",

  "bg-cyan-300",
  "bg-cyan-400",
  "bg-cyan-500",
  "bg-cyan-600",
];

const extraFeatures = [
  {
    title: "Shadcn Vue",
    description:
      "The Vue port of Shadcn. All the components you need, right in your source code.",
    icon: ComponentIcon,
  },
  {
    title: "Drizzle ORM + D1",
    description:
      "Fast, type-safe ORM, paired with Cloudflare's D1 Sqlite database.",
    icon: DatabaseIcon,
  },
  {
    title: "Lucide Icons",
    description:
      "Lucide is a collection of simply beautiful open-source icons.",
    icon: PenToolIcon,
  },
  {
    title: "Prettier + ESLint",
    description:
      "Prettier and ESLint are pre-configured for you. No more bikeshedding.",
    icon: SpellCheck2Icon,
  },
  {
    title: "Nuxt Seo",
    description:
      "Easy SEO with minimal config. Automatic sitemap and robots.txt.",
    icon: SearchIcon,
  },
  {
    title: "Nuxt Hub",
    description: "Easily deploy your website to Cloudflare with zero config.",
    icon: GlobeIcon,
  },
];
</script>

<template>
  <main class="lt-sm:px-2 py-4 sm:py-8 container space-y-32 mb-32">
    <section class="sm:min-h-[70vh] grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="lt-sm:py-16 flex flex-col gap-8 justify-center">
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight">
          Angry Nuxt
        </h1>
        <p class="text-lg">
          A Nuxt.js starter template with UnoCSS, Shadcn Vue, Drizzle ORM,
          SQLite, and more.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:self-start">
          <Button as-child variant="secondary" class="flex gap-1 items-center">
            <NuxtLink
              to="https://github.com/raggesilver/angry-nuxt"
              external
              target="_blank"
            >
              <GithubIcon class="h-[1.4em]" /> View Source
            </NuxtLink>
          </Button>
          <Button class="flex gap-1 items-center"
            >Get Started <ArrowRightIcon class="h-[1.4em]"
          /></Button>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1532205940-13602a5a0df6?q=80&w=1000&auto=format"
        aria-hidden="true"
        class="object-cover object-bc aspect-3/2 w-full max-w-[600px] rounded-lg border self-center shadow-lg"
      />
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
      <form
        class="flex flex-col gap-4 w-full md:max-w-[400px] justify-self-center border p-4 rounded-lg shadow-lg relative"
        @submit="onSubmit"
        @reset="form.handleReset"
      >
        <div>
          <p class="text-xl font-bold">Sign Up</p>
          <p class="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                type="text"
                v-bind="componentField"
                placeholder="Jane Doe"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ value, handleChange }" type="checkbox" name="tos">
          <FormItem>
            <div class="space-y-4 leading-none">
              <div class="flex items-center space-x-2">
                <FormControl>
                  <Checkbox :checked="value" @update:checked="handleChange" />
                </FormControl>
                <FormLabel
                  class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >I agree to the terms of service.</FormLabel
                >
              </div>
              <FormMessage />
            </div>
          </FormItem>
        </FormField>
        <div class="grid lt-sm:grid-cols-1 sm:grid-flow-col gap-2">
          <Button type="reset" variant="secondary">Reset</Button>
          <Button type="submit">Submit</Button>
        </div>

        <span
          aria-hidden="true"
          class="absolute w-3 h-3 rounded-full bg-primary/30 -top-1.5 -right-1.5 animate-ping"
        ></span>

        <span
          aria-hidden="true"
          class="absolute w-2 h-2 rounded-full bg-primary -top-1 -right-1"
        ></span>
      </form>
      <div class="flex flex-col gap-8 -lt-md:order-1">
        <h2 class="text-3xl sm:text-5xl font-extrabold">
          Ship your forms with confidence.
        </h2>
        <p>
          Type-safe Forms! Shared frontend and backend validation with Zod.
          Accessible client-side validation with VeeValidate.
        </p>
      </div>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
      <div class="flex flex-col gap-8 -lt-md:order-1">
        <h2 class="text-3xl sm:text-5xl font-extrabold">
          Tailwind CSS, but faster.
        </h2>
        <p>
          UnoCSS is a utility-first CSS framework that is very, very fast. It's
          a drop-in replacement for Tailwind CSS.
        </p>
      </div>
      <div
        class="grid grid-cols-4 gap-2 self-center justify-self-center"
        aria-hidden="true"
      >
        <span
          v-for="color of colors"
          :key="color"
          class="w-12 h-12 rounded-lg border"
          :class="color"
        ></span>
      </div>
    </section>

    <section class="!mt-64 space-y-8">
      <h2 class="text-3xl sm:text-5xl font-extrabold">And more...</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card v-for="feature of extraFeatures" :key="feature.title">
          <CardHeader>
            <CardTitle as="h3" class="flex gap-1 items-center">
              <component
                :is="feature.icon"
                v-if="feature.icon"
                class="h[1.2rem]"
              />
              {{ feature.title }}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{{ feature.description }}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>

    <section
      class="flex flex-col items-center border rounded-xl px-4 py-20 space-y-4"
    >
      <h2 class="text-3xl sm:text-5xl font-extrabold">
        Get started <span class="underline">today</span>.
      </h2>

      <p>Clone the repository or deploy it directly to Nuxt Hub.</p>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center !mt-8 w-content"
      >
        <Button as-child variant="secondary" class="flex gap-0.5 items-center">
          <NuxtLink
            to="https://hub.nuxt.com/new?repo=raggesilver/angry-nuxt"
            external
            target="_blank"
          >
            Deploy to Nuxt Hub
            <ArrowUpRightIcon class="h-[1.4em]" />
          </NuxtLink>
        </Button>
        <Button as-child class="flex gap-0.5 items-center">
          <NuxtLink to="https://ko-fi.com/raggesilver" external target="_blank">
            Support Me <CoffeeIcon class="h-[1.4em]" />
          </NuxtLink>
        </Button>
      </div>
    </section>
  </main>
</template>
