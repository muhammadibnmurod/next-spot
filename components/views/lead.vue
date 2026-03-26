<script setup lang="ts">
import image from "@/assets/images/lead-image.jpg";
import RoundedIcon from "@/assets/icons/rounded.svg";

const itemKeys = ['lead.item1', 'lead.item2', 'lead.item3', 'lead.item4'];
</script>

<template>
  <section class="lead-section">
    <div class="lead-content">
      <div class="lead-text">
        <h2 class="lead-title">{{ $t('lead.title') }}</h2>
        <p class="lead-description">
          {{ $t('lead.description') }}
        </p>
        <ul class="lead-list">
          <li v-for="key in itemKeys" :key="key" class="lead-list-item">
            <span class="lead-check">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="20" />
                <path
                  d="M5.5 10.5L8.5 13.5L14.5 7.5"
                  stroke="blue"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>{{ $t(key) }}</span>
          </li>
        </ul>
      </div>
      <div class="lead-image-wrapper">
        <img :src="image" alt="Lead the frontier" class="lead-image" />
        <div class="lead-icon-overlay">
          <RoundedIcon class="lead-rounded-icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lead-section {
  background-color: #1447e6;
  padding: 64px 80px;
}

.lead-content {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 80px;
}

.lead-text {
  flex: 1;
  color: #ffffff;
}

.lead-title {
  color: #fff;
  font-family: Inter;
  font-size: 55px;
  font-style: normal;
  font-weight: 900;
  line-height: 75px; /* 125% */
}

.lead-description {
  color: #dbeafe;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.5px; /* 162.5% */
}

.lead-list {
  list-style: none;
  padding: 0;
  padding-top: 25px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.lead-list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 500;
}

.lead-check {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
}

.lead-image-wrapper {
  position: relative;
  flex-shrink: 0;
  width: 480px;
}

.lead-image {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

.lead-icon-overlay {
  position: absolute;
  top: -20px;
  right: -20px;
}

.lead-rounded-icon {
  width: 100px;
  height: 100px;
}
</style>
