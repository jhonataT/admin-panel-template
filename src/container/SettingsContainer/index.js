import { SettingsScreen } from "../../screen/SettingsScreen";

const settingOptions = [
    {
        step: "Configurações do Usuário",
        children: [
            {
                label: "Salvar login",
                onToggle: () => console.log("AA"),
                defaultChecked: false
            },
            {
                label: "Mostrar notificações",
                onToggle: () => console.log("AA"),
                defaultChecked: true
            }
        ]
    },
    {
        step: "Configurações de Layout",
        children: [
            {
                label: "Tema light",
                onToggle: () => console.log("AA"),
                defaultChecked: true,
                disabled: true
            },
        ]
    }
]

export const SettingsContainer = () => {
    return <SettingsScreen options={settingOptions}/>
}