import React from "react";
import { View, Text, Image } from "react-native";

const UniDespesa = ({ route }) => {
    // Obtém os detalhes da despesa passados através da propriedade de navegação
    const { despesa } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Categoria: {despesa.categoria}</Text>
            <Text>Descrição: {despesa.descricao}</Text>
            <Text>Valor: R$ {despesa.valor.toFixed(2)}</Text>
            <Image source={{ uri: despesa.icon }} style={{ width: 100, height: 100 }} />
            {/* Adicione mais detalhes da despesa, se necessário */}
        </View>
    );
}

export default UniDespesa;
