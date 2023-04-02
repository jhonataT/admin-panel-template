import { Grid } from "@mui/material";
import { DefaultButton } from "../../components/Button";
import { Card } from "../../components/Card";
import { DefaultInput } from "../../components/Input";
import "./styles.css";

export const NewProjectsScreen = ({cancelButton}) => {
  return (
    <div className="new-projects__container">
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={6}>
        <DefaultInput
          variant=""
          width="fullWidth"
          label="Nome do Projeto"
          placeholder="Nome do Projeto"
        />
          </Grid>
          <Grid item xs={6}>
            <DefaultInput
              width="fullWidth"
              label="Email do Usuário"
              placeholder="Email"
            />
          </Grid>
          <Grid item xs={6}>
            <DefaultInput
              width="fullWidth"
              label="Patrocinador"
              placeholder="Patrocinador"
            />
          </Grid>
          <Grid item xs={3}>
            <DefaultInput 
            width="fullWidth" 
            helperText="Início"
            type="date" />
          </Grid>
          <Grid item xs={3}>
            <DefaultInput 
            width="fullWidth" 
            helperText="Final"
            type="date" />
          </Grid>
          <Grid item xs={12}>
          <DefaultInput 
            width="fullWidth"
            label="Descrição do Projeto"
            placeholder="Descrição do Projeto" 
            helperText
            type="text-area" />
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
  );
};
