<script setup lang="ts">
import { signUpSchema } from "#shared/validation/sign-up";
import { toTypedSchema } from "@vee-validate/zod";
import { LoaderIcon } from "lucide-vue-next";
import { useForm } from "vee-validate";
import { toast } from "vue-sonner";
import { isFetchError } from "~/lib/is-ofetch-error";

const validationSchema = toTypedSchema(signUpSchema);

const form = useForm({
  validationSchema,
  initialValues: {
    name: "",
    tos: false,
  },
});

const isSubmitting = computed(() => form.isSubmitting.value);

const onSubmit = form.handleSubmit(async (values, { resetForm }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const response = await $fetch("/sign-up", { method: "POST", body: values });
    toast.success(response.message);
    resetForm();
  } catch (error) {
    if (isFetchError(error)) {
      toast.error(error.statusMessage ?? error.message);
    } else {
      toast.error("An unexpected error occurred.");
      console.error(error);
    }
  }
});
</script>

<template>
  <form @submit="onSubmit" @reset="form.handleReset">
    <div>
      <p class="text-xl font-bold">Sign Up</p>
      <p class="text-sm text-muted-foreground">
        Create an account to get started.
      </p>
    </div>
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" placeholder="Jane Doe" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ value, handleChange }" type="checkbox" name="tos">
      <FormItem>
        <div class="space-y-4 leading-none">
          <div class="flex items-center space-x-2">
            <FormControl>
              <Checkbox
                :model-value="value"
                @update:model-value="handleChange"
              />
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
    <div class="grid lt-sm:grid-cols-1 sm:grid-cols-2 gap-2">
      <Button type="reset" variant="secondary" :disabled="isSubmitting"
        >Reset</Button
      >
      <Button
        type="submit"
        class="flex items-center gap-2"
        :disabled="isSubmitting"
      >
        <span>Submit</span>
        <LoaderIcon v-if="isSubmitting" class="animate-spin w-[1em]" />
      </Button>
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
</template>
