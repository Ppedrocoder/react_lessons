import { Meta, StoryObj } from "@storybook/react-vite";
import Botao from "./botao";
import { IBotaoProps } from "./IBotaoProps";


const meta = {
    title: "@component/Botao",
    component: Botao,
    tags: ["autodocs"],
} satisfies Meta<typeof Botao>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = (args: IBotaoProps) => <Botao {...args}/>;
Default.args = {
    ...Default.args,
    label: "Cadastrar",
    className: "br-button primary",
    action: () => alert("Botão clicado!")
}