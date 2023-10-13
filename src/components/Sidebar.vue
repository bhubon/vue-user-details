<script setup>

</script>

<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">User Management</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" to="/">
                <span>Dashboard</span></router-link>
        </li>
        <li class="nav-item">
            <router-link to="/user-details" class="nav-link">
                <span>User Details</span>
            </router-link>
        </li>
    </ul>
</template>

<style scoped></style>