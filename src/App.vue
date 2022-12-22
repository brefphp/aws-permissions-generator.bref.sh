<script setup lang="ts">
import PolicyGenerator from "@/components/PolicyGenerator.vue";
</script>

<template>
    <div class="flex justify-center sm:px-8">
        <div
            class="mx-auto w-full max-w-7xl px-8 lg:px-20 ring-1 bg-zinc-900 ring-zinc-300/20 text-zinc-100 py-10 lg:py-20"
        >
            <h1 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">AWS Permissions Generator</h1>
            <p class="mt-6 mb-8 text-base text-zinc-400">
                Generate limited IAM permissions for your AWS credentials by selecting the AWS services you want access
                to.
            </p>

            <PolicyGenerator />
        </div>
    </div>
</template>
