<template>
  <section id="why-uzbekistan" class="section-anchor why-uzbekistan">
    <div class="container">
      <div class="content-wrapper">
        <!-- Left: Image -->
        <div class="image-side">
          <img :src="whyUzbekistanImage" alt="Why Uzbekistan" class="main-image" />
        </div>

        <!-- Right: Text -->
        <div class="text-side">
          <h2 class="title">
            {{ $t('why_uzbekistan.title1') }}
            <span class="highlight"> {{ $t('why_uzbekistan.title2') }}</span>
          </h2>

          <p class="description">
            {{ $t('why_uzbekistan.description') }}
          </p>

          <div class="features">
            <div v-for="feature in features" :key="feature.titleKey" class="feature-group">
              <h3 class="feature-title">{{ $t(feature.titleKey) }}</h3>
              <ul class="feature-list">
                <li v-for="itemKey in feature.itemKeys" :key="itemKey" class="feature-item">
                  <span class="check-icon">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#2563EB" />
                      <path d="M6 10.5L8.5 13L14 7.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  {{ $t(itemKey) }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import whyUzbekistanImage from '@/assets/images/whyuzbeistan-image.jpg'

const features = [
  {
    titleKey: 'why_uzbekistan.feat1_title',
    itemKeys: [
      'why_uzbekistan.feat1_item1',
      'why_uzbekistan.feat1_item2',
      'why_uzbekistan.feat1_item3',
    ],
  },
  {
    titleKey: 'why_uzbekistan.feat2_title',
    itemKeys: ['why_uzbekistan.feat2_item1', 'why_uzbekistan.feat2_item2'],
  },
  {
    titleKey: 'why_uzbekistan.feat3_title',
    itemKeys: [
      'why_uzbekistan.feat3_item1',
      'why_uzbekistan.feat3_item2',
      'why_uzbekistan.feat3_item3',
    ],
  },
]
</script>

<style scoped>
.why-uzbekistan {
  padding: 80px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.content-wrapper {
  display: flex;
  align-items: center;
  gap: 80px;
}

.image-side {
  flex: 0 0 45%;
}

.main-image {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  display: block;
}

.text-side {
  flex: 1;
}

.title {
  font-size: 36px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 20px 0;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.highlight {
  color: #2563EB;
}

.description {
  font-size: 16px;
  color: #555;
  line-height: 1.7;
  margin: 0 0 36px 0;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.feature-group {
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  border-radius: 15px;
  padding: 10px;
  gap: 10px;
}

.feature-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #444;
}

.check-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 40px;
  }

  .image-side {
    flex: none;
    width: 100%;
  }

  .title {
    font-size: 26px;
  }
}
</style>
