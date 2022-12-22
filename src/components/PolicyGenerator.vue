<script lang="ts">
import { defineComponent } from "vue";
import IconClipboard from "@/components/icons/IconClipboard.vue";
import type { PolicyConfig } from "@/PolicyGenerator";
import { generatePolicy } from "@/PolicyGenerator";

export default defineComponent({
    components: { IconClipboard },
    data() {
        const policyConfig: PolicyConfig = {
            cloudformation: true,
            iam: true,
            lambda: true,
            cloudWatch: true,
            apiGateway: false,
            cloudFront: false,
            eventBridge: false,
            sqs: false,
            sns: false,
            rds: false,
            dynamoDb: false,
            s3: false,
            acm: false,
            ssm: false,
            vpc: false,
            elasticache: false,
            route53: false,
        };
        return {
            policy: "",
            policyConfig,
            copied: false,
        };
    },
    watch: {
        policyConfig: {
            deep: true,
            immediate: true,
            handler: function (policyConfig) {
                if (policyConfig) {
                    this.policy = JSON.stringify(generatePolicy(policyConfig), undefined, 2);
                }
            },
        },
    },
    methods: {
        copyToClipboard() {
            const el = document.createElement("textarea");
            el.value = this.policy;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 2000);
        },
    },
});
</script>

<template>
    <div class="flex flex-col gap-2">
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.cloudformation" />
            <span>CloudFormation</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.lambda" />
            <span>Lambda</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.cloudWatch" />
            <span>CloudWatch metrics and logs</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.apiGateway" />
            <span>API Gateway</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.cloudFront" />
            <span>CloudFront</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.eventBridge" />
            <span>EventBridge / CloudWatch Events</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.sqs" />
            <span>SQS</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.sns" />
            <span>SNS</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.dynamoDb" />
            <span>DynamoDB</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.rds" />
            <span>RDS</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.s3" />
            <span>S3</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.acm" />
            <span>ACM (HTTPS certificates)</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.ssm" />
            <span>SSM parameters (secrets)</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.vpc" />
            <span>VPC</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.elasticache" />
            <span>Elasticache (Redis, Memcache)</span>
        </label>
        <label class="label">
            <input type="checkbox" class="checkbox" v-model="policyConfig.route53" />
            <span>Route53</span>
        </label>
    </div>

    <div class="mt-6">
        <label class="block font-medium text-zinc-400 mb-2" for="policy">AWS IAM policy</label>
        <textarea
            id="policy"
            class="text-xs mt-1 px-4 py-3 block w-full bg-zinc-800 text-zinc-300 font-mono border border-zinc-600 focus:border-zinc-300 focus:ring focus:ring-zinc-200 focus:ring-opacity-50 rounded-md shadow-sm"
            rows="12"
            readonly
            v-model="policy"
        ></textarea>
        <div class="flex justify-end mt-2">
            <button @click="copyToClipboard" type="button" class="button">
                <IconClipboard class="w-5 h-5" :class="{ 'text-teal-500': copied }" />
                <span v-if="!copied">Copy to clipboard</span>
                <span v-if="copied"> Copied to clipboard </span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.checkbox {
    @apply rounded border-zinc-300 text-orange-600 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50;
}
.label {
    @apply flex items-center mt-1 gap-3;
}
.label strong {
    @apply text-white;
}
.button {
    @apply inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70;
}
</style>
