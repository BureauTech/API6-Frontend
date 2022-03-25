import Card from "@/components/Card/Card.vue"
import Button from "@/components/Button/Button.vue"
import Input from "@/components/Input/Input.vue"
import axios from "@/axios.js"
import router from "@/router"

export default {
    name: "UsersList",
    components: {
        Card,
        Button,
        Input

    },
    data: function() {
        return {
            headers: [{text: "Nome", align: "start", value: "useName"}, {text: "E-mail",
                value: "useEmail"
            }, {text: "Telefone", value: "usePhone"}, 
            {text: "Editar", value: "edit"}, {text: "Excluir", value: "delete"}],
            users: [],
            dialog: false,
            user: "",
            page: 0,
            pageCount: 2,
            itemsPerPage: 10,
            hasNext: true
        }
    },
    beforeMount: function() {
        this.getUsers()
    },
    methods: {
        getUsers: async function() {
            try {
                console.log(this.page, this.hasNext, this.users)
                if (!this.hasNext) return
                const response = await axios.get("/user", {params: {page: this.page++}})
                const newUsers = response.data.data
                this.hasNext = newUsers.length == 10
                this.users = [...this.users, ...newUsers]
            } catch {
                this.$toasted.error("Erro ao listar usuários!")
            }
        },
        Edit(item) {
            this.$router.push({name: "EditUser", params: {user: item}})
        },
        Delete(item) {
            this.dialog = true
            this.user = item
        },
        AddUser() {
            router.push({name: "Signup"})
        },
        async DeleteUser() {
            const response = await axios.delete(`/user/${this.user.useCod}/`)
            if (!response.data.success) {
                return this.$toasted.error("Ocorreu um erro na requisição")
            }
            this.$toasted.success("Usuário excluído com sucesso!")
            window.location.reload()
        }
    }
}