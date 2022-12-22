<script setup lang="ts">
import PolicyGenerator from "@/components/PolicyGenerator.vue";
</script>

<template>
    <div class="flex justify-center sm:px-8">
        <div
            class="mx-auto w-full max-w-7xl px-8 lg:px-20 ring-1 bg-zinc-900 ring-zinc-300/20 text-zinc-100 py-10 lg:py-12"
        >
            <div class="flex justify-center mb-12 lg:mb-20">
                <nav
                    class="flex rounded-full px-3 text-xs sm:text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10"
                >
                    <a
                        class="relative block px-2 py-2 transition hover:text-orange-400 flex items-center"
                        href="https://github.com/brefphp/aws-permissions-generator.bref.sh"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="h-6 w-6 mr-2 text-zinc-500 fill-current hidden sm:block"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                            ></path>
                        </svg>
                        <span class="text-zinc-500">github.com/</span>brefphp/aws-permissions-generator.bref.sh</a
                    >
                </nav>
            </div>

            <h1 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">AWS Permissions Generator</h1>
            <p class="mt-6 mb-8 text-base text-zinc-400">
                Generate limited IAM permissions for your AWS credentials by selecting the AWS services you want access
                to.
            </p>

            <PolicyGenerator />

            <footer class="mt-32 lg:mt-40 mx-auto border-t pt-10 border-zinc-700/40">
                <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div class="flex gap-8 text-sm font-medium text-zinc-500">
                        <a class="transition hover:text-orange-400" href="https://bref.sh">Bref</a>
                        <a class="transition hover:text-orange-400" href="https://serverless-visually-explained.com/"
                            >Serverless Visually Explained</a
                        >
                        <a class="transition hover:text-orange-400" href="https://port7777.com/">7777</a>
                    </div>
                    <p class="text-sm text-zinc-500">
                        © 2022
                        <a href="https://mnapoli.fr" class="hover:underline">Matthieu Napoli</a>
                    </p>
                </div>
            </footer>
        </div>
    </div>
</template>
