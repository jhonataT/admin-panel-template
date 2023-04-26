import { SettingsScreen } from "../../screen/SettingsScreen";

const settingOptions = [
    {
        step: "Configurações do Usuário",
        children: [
            {
                label: "Manter logado",
                onToggle: () => console.log("AA"),
                defaultChecked: true,
                disabled: true
            },
            {
                label: "Mostrar notificações",
                onToggle: () => console.log("AA"),
                defaultChecked: true,
                disabled: true
            }
        ]
    }
]

export const SettingsContainer = () => {
    return <SettingsScreen options={settingOptions}/>
}