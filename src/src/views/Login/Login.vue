<template>
  <Card
    :loading="loading"
    cols="12"
    sm="8"
    lg="6"
    xl="4"
    :roundLevel="4"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-col cols="11">
      <v-form
        ref="loginForm"
        lazy-validation
      >
        <v-row
          align="center"
          justify="center"
          no-gutters
        >
        </v-row>
        <v-row no-gutters>
          <p class="text-h4 bahama--text">Acesso</p>
          <p class="text-h5 bahama--text text-start">Insira seu e-mail e senha para fazer o login.</p>
        </v-row>
        <v-row no-gutters>
          <Input
            placeholder="exemplo@bureautech.com"
            :rules="[rules.required, rules.email]"
            v-model="loginForm.useEmail"
            type="email"
            name="email"
            required
          />
        </v-row>
        <v-row no-gutters>
          <Input
            placeholder="Senha"
            :rules="[rules.required]"
            v-model="loginForm.usePassword"
            type="password"
            required
            name="password"
          />
        </v-row>
        <v-row
          align="center"
          justify="center"
          class="mb-6 mt-6"
        >
          <Button
            type="submit"
            min-width="150"
            min-height="50"
            color="#228B22"
            @click.stop.prevent="login"
          >
            Login
          </Button>
        </v-row>
      </v-form>
    </v-col>
  </Card>
</template>

<script src="./Login.js"></script>