<template>
  <!-- HIPAA Section -->
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-2 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
          COMPLIANCE
        </span>
        <h2 class="text-3xl font-bold text-navy-900 sm:text-4xl">
          HIPAA Compliance
        </h2>
        <p class="mt-4 text-lg text-navy-500 max-w-3xl mx-auto">
          Our Commitment to Protecting Health Information
        </p>
      </div>

      <div class="prose prose-lg text-navy-500 max-w-4xl mx-auto">
        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">1. HIPAA Compliance Statement</h3>
          <p>
            Doc2Doc.Health is fully committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA) of 1996. We implement appropriate administrative, physical, and technical safeguards to protect the confidentiality, integrity, and availability of protected health information (PHI).
          </p>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">2. Our Safeguards</h3>
          <div class="grid md:grid-cols-2 gap-6 mt-4">
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-green-700 mb-2">Administrative</h4>
              <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>Regular risk assessments</li>
                <li>Staff HIPAA training programs</li>
                <li>Designated privacy officer</li>
                <li>Business associate agreements</li>
              </ul>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-green-700 mb-2">Physical</h4>
              <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>Secure facility access controls</li>
                <li>Workstation security policies</li>
                <li>Device encryption</li>
                <li>Proper media disposal</li>
              </ul>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-green-700 mb-2">Technical</h4>
              <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>End-to-end encryption</li>
                <li>Multi-factor authentication</li>
                <li>Audit logging</li>
                <li>Automatic logoff</li>
              </ul>
            </div>
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="font-semibold text-green-700 mb-2">Organizational</h4>
              <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>Breach notification procedures</li>
                <li>Incident response plan</li>
                <li>Policies and procedures documentation</li>
                <li>Regular compliance audits</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">3. Business Associate Agreements</h3>
          <p>
            We enter into Business Associate Agreements (BAAs) with all partners and vendors who may encounter PHI, ensuring they maintain the same high standards of data protection required by HIPAA.
          </p>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">4. Patient Rights</h3>
          <p>
            We support healthcare providers in fulfilling their obligations to honor patient rights under HIPAA, including:
          </p>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>Right to access medical records</li>
            <li>Right to request amendments</li>
            <li>Right to accounting of disclosures</li>
            <li>Right to request restrictions</li>
            <li>Right to confidential communications</li>
          </ul>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">5. Breach Notification</h3>
          <p>
            In the unlikely event of a breach involving PHI, we follow strict notification procedures as required by HIPAA's Breach Notification Rule, including notifying:
          </p>
          <ul class="list-disc pl-6 mt-2 space-y-2">
            <li>Affected individuals</li>
            <li>The Secretary of HHS</li>
            <li>In some cases, the media</li>
          </ul>
          <p class="mt-4 text-sm bg-navy-50 p-4 rounded">
            <strong>Note:</strong> Doc2Doc.Health has never experienced a reportable breach of PHI since our founding.
          </p>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">6. Compliance Verification</h3>
          <p>
            Our compliance measures are regularly reviewed by independent auditors. We maintain all required documentation of our HIPAA compliance program.
          </p>
        </div>

        <div class="mb-12">
          <h3 class="text-xl font-semibold text-navy-900 mb-4">7. Contact Our Compliance Officer</h3>
          <p>
            For HIPAA-related inquiries or to report concerns:
          </p>
          <div class="mt-4 bg-navy-50 p-6 rounded-lg">
            <p class="font-medium text-navy-800">HIPAA Compliance Officer</p>
            <p class="mt-2">Email: <a href="mailto:hipaa@doc2doc.health" class="text-green-600 hover:underline">hipaa@doc2doc.health</a></p>
            <p>Phone: [Your Compliance Phone Number]</p>
            <p class="mt-2 text-sm">Available Monday-Friday, 9am-5pm EST</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HIPAAPage',
  head() {
    return {
      title: 'HIPAA Compliance - Doc2Doc.Health',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Our HIPAA compliance measures to protect healthcare information'
        }
      ]
    }
  }
}
</script>

<style scoped>
.prose ul {
  @apply mt-3;
}
.prose li {
  @apply mb-2;
}
</style>