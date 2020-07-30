<template>
    <el-header>
        <el-dropdown class="float-right">
            <el-row class="dropdown-profile">
                <el-avatar src="https://qph.fs.quoracdn.net/main-qimg-8d945bbaf167b063040eca16b0c59cd8.webp" />
            </el-row>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <span>Logout</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-header>
</template>

<style scoped>
    .el-header {
        background: #fff;
        box-shadow: 0 3px 4px rgba(0, 21, 41, 0.08);
    }

    .dropdown-profile {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.5rem;
    }
</style>
