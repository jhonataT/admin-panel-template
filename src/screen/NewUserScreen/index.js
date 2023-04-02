import { Grid, MenuItem } from '@mui/material';
import { Card } from '../../components/Card/index';
import { DefaultInput } from '../../components/Input';
import './styles.css';
import { DefaultButton } from '../../components/Button';

export const NewUserScreen = ({cancelButton}) => {
    // const gender = ['Masculino', 'Feminino', 'Prefiro não responder', 'Outro']
    return <div className="new-user__container">
        <Card>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <DefaultInput 
                    width="fullWidth"
                    label="Nome do Usuário"
                    placeholder="Nome do Usuário"
                    />
                </Grid>
                <Grid item xs={3}>
                    <DefaultInput width="fullWidth" helperText="Data de Nascimento" type="date" />
                </Grid>
                <Grid item xs={6}>
                    <DefaultInput 
                    width="fullWidth"
                    label="E-mail"
                    placeholder="E-mail"
                    />
                </Grid>
                <Grid item xs={6}>
                    <DefaultInput 
                    width="fullWidth"
                    label="Gênero"
                    placeholder="Gênero"
                    select />
                </Grid>
            </Grid>
            <div className="buttons__container">
                <DefaultButton
                    label="Cancelar"
                    handleClick={() => cancelButton()}
                    type="contained"
                    color="error"
                    size="small"
                    fullWidth={false}
                />
                <DefaultButton
                    label="Salvar"
                    handleClick
                    type="contained"
                    color="success"
                    size="small"
                    fullWidth={false}
                />
                </div>
        </Card>
    </div>
}