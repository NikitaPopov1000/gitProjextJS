
<template>
  <div class="footerPaginator">
    <Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
               currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
  </div>
</template>


<script setup>
import Paginator from 'primevue/paginator';
</script>



<style>
.footerPaginator {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>