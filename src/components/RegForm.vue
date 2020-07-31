<template>
  <div class="wrapper">
      <h1>Регистрация нового клиента</h1>
        <div 
            class="message"
            @click="closeMessage"
            v-if="isSuccessfull"
        >
            <h2>Клиент добавлен</h2>
            <button>OK</button>
        </div>
      <form @submit.prevent="submitHandler">

          <fieldset>
            <legend>Основная информация</legend>
            <small class="error"
                v-if="$v.form.lastName.$dirty && !$v.form.lastName.required"
            >
                Поле "Фамилия" не должно быть пустым
            </small>
            <div class="input-field">
                <label for="lastName">Фамилия*</label>
                <input
                    id="lastName"
                    type="text"
                    class="input"
                    v-model.trim="form.lastName"
                >
            </div>
            <small class="error"
                v-if="$v.form.firstName.$dirty && !$v.form.firstName.required"
            >
                Поле "Имя" не должно быть пустым
            </small>
            <div class="input-field">
                <label for="firstName">Имя*</label>
                <input
                    id="firstName"
                    type="text"
                    class="input"
                    v-model.trim="form.firstName"
                >
            </div>
            <div class="input-field">
                <label for="patronymic">Отчество</label>
                <input
                    id="patronymic"
                    type="text"
                    class="input"
                    v-model.trim="form.patronymic"
                >
            </div>
            <small class="error"
                v-if="$v.form.birthDate.$dirty && !$v.form.birthDate.required"
            >
                Поле "Дата рождения" не должно быть пустым
            </small>
            <div class="input-field">
                <label for="birthDate">Дата рождения*</label>
                <input
                    id="birthDate"
                    type="date"
                    class="input date"
                    v-model="form.birthDate"
                >
            </div>
            <small class="error"
                v-if="$v.form.phone.$model && $v.form.phone.$dirty && $v.form.phone.$invalid "
            >
                Поле "Номер Телефона" должно содержать {{$v.form.phone.$params.isLengthEqual.value}} цифр и начинаться с цифры {{$v.form.phone.$params.isFirstNumberEqual.value}}
            </small>
            <div class="input-field">
                <label for="phone">
                    Номер телефона
                    <!-- <small class="pattern">формат {{getPattern($v.form.phone.$params.isFirstNumberEqual.value, $v.form.phone.$params.isLengthEqual.value)}}</small> -->
                    <small class="pattern">формат {{getPattern(7, 11)}}</small>
                </label>
                
                <input
                    id="phone"
                    type="tel"
                    class="input"
                    v-model.trim="form.phone"
                >
            </div>
            <div class="input-field">
                <label for="gender">Пол</label>
                <input
                    id="gender"
                    type="text"
                    class="input"
                    v-model.trim="form.gender"
                >
            </div>
            <small class="error"
                v-if="$v.form.selectedGroups.$dirty && !$v.form.selectedGroups.required"
            >
                Поле "Группа клиентов" не должно быть пустым
            </small>
            <div class="input-field">
                <label>Группа клиентов*</label>
                <div class="custom-select">
                    <select multiple v-model="form.selectedGroups">
                        <option
                            v-for="(group, index) of groups"
                            :value="group.value"
                            :key="index"
                        >
                            {{group.label}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="input-field">
                <label for="doctors">Лечащий врач</label>
                <div class="custom-select dropdown">
                    <select v-model="form.selectedDoctor" id="doctors">
                        <option
                            v-for="(doctor, index) of doctors"
                            :value="doctor.value"
                            :key="index"
                        >
                            {{doctor.label}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="input-field check-field">
                <label class="check">
                    <input type="checkbox" class="checkbox" v-model="form.disagreeToSendSMS">
                    <span class="checkmark"></span>
                </label>
                <p>Не отправлять СМС</p>
            </div>
          </fieldset>
          <fieldset>
            <legend>Адрес</legend>
            <small class="error"
                v-if="$v.form.index.$dirty && $v.form.index.$model && $v.form.index.$invalid"
            >
                Поле "Индекс" должно содержать {{$v.form.index.$params.isLengthEqual.value}} цифр
            </small>
            <div class="input-field">
                <label for="index">Индекс</label>
                <input
                    id="index"
                    type="text"
                    class="input"
                    v-model.trim="form.index"
                >
            </div>          
            <div class="input-field">
                <label for="country">Страна</label>
                <input
                    id="country"
                    type="text"
                    class="input"
                    v-model.trim="form.country"
                >
            </div>
            <div class="input-field">
                <label for="region">Область</label>
                <input
                    id="region"
                    type="text"
                    class="input"
                    v-model.trim="form.region"
                >
            </div>
            <small class="error"
                v-if="$v.form.city.$dirty && !$v.form.city.required"
            >
                Поле "Город" не должно быть пустым
            </small>
            <div class="input-field">
                <label for="city">Город*</label>
                <input
                    id="city"
                    type="text"
                    class="input"
                    v-model.trim="form.city"
                >
            </div>          
            <div class="input-field">
                <label for="street">Улица</label>
                <input
                    id="street"
                    type="text"
                    class="input"
                    v-model.trim="form.street"
                >
            </div>
            <div class="input-field">
                <label for="building">Дом</label>
                <input
                    id="building"
                    type="text"
                    class="input"
                    v-model.trim="form.building"
                >
            </div>
            
          </fieldset>
          <fieldset>
            <legend>Подтверждающий документ</legend>
            <small class="error"
                v-if="$v.form.selectedDocument.$dirty && !$v.form.selectedDocument.required"
            >
                Поле "Документ" не должно быть пустым
            </small>
            <div class="input-field">
                <label for="document">Документ*</label>
                <div class="custom-select dropdown">
                    <select id="document" v-model="form.selectedDocument">
                        <option
                            v-for="(document, index) of documents"
                            :key="index"
                            :value="document.value"
                        >
                            {{document.label}}
                        </option>
                    </select>
                </div>
            </div>
            <div class="input-field">
                <label for="series">Серия</label>
                <input
                    id="series"
                    type="text"
                    class="input"
                    v-model.trim="form.series"
                >
            </div>
            <div class="input-field">
                <label for="number">Номер</label>
                <input
                    id="number"
                    type="text"
                    class="input"
                    v-model.trim="form.number"
                >
            </div>
            <div class="input-field">
                <label for="docOrgan">Кем выдан</label>
                <input
                    id="organ"
                    type="text"
                    class="input"
                    v-model.trim="form.docOrgan"
                >
            </div>
            <small class="error"
                v-if="$v.form.docDate.$dirty && !$v.form.docDate.required"
            >
                Поле "Дата выдачи" не должно быть пустым
            </small>        
            <div class="input-field">
                <label for="docDate">Дата выдачи*</label>
                <input
                    id="docDate"
                    type="date"
                    class="input date"
                    v-model="form.docDate"
                >
            </div>
          </fieldset>
          <button type="submit">Зарегистрировать клиента</button>
      </form>
  </div>
</template>

<script>
import {required, integer} from "vuelidate/lib/validators"
import {isLengthEqual, isFirstNumberEqual} from "@/validators/validators"

export default {
    data() {
        return {
            isSuccessfull: false,
            form: {
                firstName: "",
                lastName: "",
                patronymic: "",
                birthDate: "",
                phone: "",
                gender: "",
                selectedGroups: [],
                selectedDoctor: "",
                disagreeToSendSMS: false,
                index: "",
                country: "",
                region: "",
                city: "",
                street: "",
                building: "",
                selectedDocument: "",
                series: "",
                number: "",
                docOrgan: "",
                docDate: "",
            },
            groups: [
                {
                    label: "VIP",
                    value: "VIP"
                },
                {
                    label: "Проблемные",
                    value: "problematic"
                },
                {
                    label: "ОМС",
                    value: "oms"
                }
            ],
            doctors: [
                {
                    label: "Иванов",
                    value: "ivanov"
                },
                {
                    label: "Захаров",
                    value: "zacharov"
                },
                {
                    label: "Чернышева",
                    value: "chernisheva"
                }
            ],
            documents: [
                {
                    label: "Паспорт",
                    value: "passport"
                },
                                {
                    label: "Свидетельство о рождении",
                    value: "birthCert"
                },
                {
                    label: "Водительское удостоверение",
                    value: "driversLic"
                },
            ],
            
        }
    },
    validations() {
        return {
            form: {
                firstName: {required},
                lastName: {required},
                birthDate: {required},
                phone: this.form.phone.length ? 
                    {
                        isLengthEqual: isLengthEqual(11),
                        isFirstNumberEqual: isFirstNumberEqual('7'),
                        integer
                    } : {},
                // phone: {
                //         isLengthEqual: isLengthEqual(11),
                //         isFirstNumberEqual: isFirstNumberEqual('7'),
                //         integer
                // },
                selectedGroups: {required},
                city: {required},
                selectedDocument: {required},
                docDate: {required},
                index: this.form.index.length ? 
                    {
                        integer,
                        isLengthEqual: isLengthEqual(6)
                    } : {},
            }
        } 
    },
    methods: {
        submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            console.log('ok go')
            this.isSuccessfull = true
        },
        getPattern(firstNumber, length) {
            let arr = [firstNumber]
            for (let i = 1; i < length; i++) {
                arr.push("x")
            }
            return arr.join('')
        },
        closeMessage() {
            this.isSuccessfull = false
            this.form.firstName = ""
            this.form.lastName = ""
            this.form.patronymic = ""
            this.form.birthDate = ""
            this.form.phone = ""
            this.form.gender = ""
            this.form.selectedGroups = []
            this.form.selectedDoctor = ""
            this.form.disagreeToSendSMS = false
            this.form.index = ""
            this.form.country = ""
            this.form.region = ""
            this.form.city = ""
            this.form.street = ""
            this.form.building = ""
            this.form.selectedDocument = ""
            this.form.series = ""
            this.form.number = ""
            this.form.docOrgan = ""
            this.form.docDate = ""
        }
    }

}
</script>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

$main-color: #00B8AC;
$text-color: #757575;
$input-border-color: #d5dbd9;
$btn-back-color: #ffd658;
$background-color: #fff;
$error-color: #FF5E54;

.wrapper {
    max-width: 700px;
    width: 100%;
    background: $background-color;
    margin: 20px auto;
    padding: 30px;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.2);
    h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 25px;
        color: $main-color;
        text-transform: uppercase;
        text-align: center;
    }
    form {
        width: 100%;
        fieldset {
            border: solid 2px $main-color;
            margin-bottom: 15px;
            padding: 15px 10px;
            legend {
                font-size: 18px;
                // font-weight: 700;
                text-transform: uppercase;
                color: $text-color;
            }
            .input-field {
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                label {
                    min-width: 200px;
                    color: $text-color;
                    margin-right: 10px;
                    font-size: 18px;
                    .pattern {
                        display: block;
                    }
                    &.check {
                        width: 20px;
                    }
                }
                .input {
                    width: 100%;
                    outline: none;
                    border: 1px solid $input-border-color;
                    padding: 8px 10px;
                    font-size: 16px;
                    border-radius: 3px;
                    transition: all 0.3s ease;
                    &:focus {
                        border: 1px solid $main-color;
                    }
                }
                .custom-select {
                    position: relative;
                    width: 100%;
                    select {
                        -webkit-appearance: none;
                        appearance: none;
                        border: 1px solid $input-border-color;
                        border-radius: 3px;
                        background-color: $background-color;
                        width: 100%;
                        padding: 8px 10px;
                        outline: none;
                        transition: all 0.3s ease;
                        option {
                            color: $text-color;
                            font-size: 15px;
                        }
                         &:focus {
                            border: 1px solid $main-color;
                    }
                    }
                }
                .dropdown {
                        &:before {
                            content: '\25be';
                            position: absolute;
                            top: 5px;
                            right: 10px;
                            color: $text-color;
                        }
                }
                p {
                    color: $text-color;
                }
            }
        }
        button {
            width: 100%;
            padding: 8px 10px;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            border: none;
            background: $main-color;
            color: $background-color;
            border-radius: 3px;
            cursor: pointer;
            outline: none;
            &:hover {
                background: $btn-back-color;
            }
        }
        .error {
            color: $error-color;
            display: block;
            margin-bottom: 3px;
        }
    }
    .message {
        display: flex;
        max-width: 400px;
        height: 150px;
        position: absolute;
        z-index: 9;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 30px 50px;
        border: solid 2px $main-color;
        background: $background-color;
        box-shadow: 10px 10px 20px rgba(0,0,0,0.5);
        button {
            width: 100%;
            padding: 8px 10px;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            border: none;
            margin-top: 10px;
            background: $main-color;
            color: $background-color;
            border-radius: 3px;
            cursor: pointer;
            outline: none;
            &:hover {
                background: $btn-back-color;
            }
        }
    }
}
@media (max-width: 520px) {
    .wrapper {
        form {
            fieldset {
                .input-field {
                    flex-direction: column;
                    align-items: flex-start;
                    label {
                        margin-bottom: 5px;
                    }
                }
                .check-field {
                    flex-direction: column-reverse;
                    label {
                        margin-top: 5px;
                    }
                }
            }
        }
        .message {
            width: 80%;
            h2 {
                text-align: center;
            }
        }
    }
}
</style>