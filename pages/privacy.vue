<template>
  <!-- Privacy Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
          YOUR PRIVACY
        </span>
        <h2 class="text-3xl font-bold text-navy-900 sm:text-4xl">
          Privacy Policy
        </h2>
        <p class="mt-4 text-lg text-navy-500 max-w-3xl mx-auto">
          Effective Date: August 14, 2023
        </p>
      </div>

      <div class="prose prose-lg text-navy-500 max-w-4xl mx-auto">
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">1. Introduction</h3>
          <p>
            Doc2Doc.Health ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
          </p>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">2. Information We Collect</h3>
          <p>We may collect the following types of information:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li><strong>Personal Information:</strong> Name, email, professional credentials, contact details</li>
            <li><strong>Professional Information:</strong> License numbers, specialty, practice information</li>
            <li><strong>Usage Data:</strong> IP addresses, browser type, pages visited, access times</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your experience</li>
          </ul>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">3. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>Provide and maintain our service</li>
            <li>Verify professional credentials</li>
            <li>Improve user experience</li>
            <li>Communicate with you</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">4. Data Security</h3>
          <p>
            We implement industry-standard security measures including encryption, access controls, and secure servers to protect your information. However, no electronic transmission or storage is 100% secure.
          </p>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">5. Data Sharing</h3>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>Service providers who assist our operations</li>
            <li>Regulatory bodies when legally required</li>
            <li>Other healthcare professionals in care coordination</li>
          </ul>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">6. Your Rights</h3>
          <p>Depending on your jurisdiction, you may have rights to:</p>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
          </ul>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">7. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy periodically. We will notify you of significant changes through our platform or via email.
          </p>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">8. Contact Us</h3>
          <p>
            For privacy-related inquiries, please contact our Data Protection Officer:
          </p>
          <p class="mt-2">
            Email: privacy@doc2doc.health<br>
            Mail: [Your Physical Address]<br>
            Phone: [Your Contact Number]
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrivacyPage',
  head() {
    return {
      title: 'Privacy Policy - Doc2Doc.Health',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Privacy Policy for Doc2Doc.Health platform'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Custom styles if needed */
.prose ul {
  @apply mt-3;
}
.prose li {
  @apply mb-2;
}
</style>