import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors, colorReactiveInverted, theme } from "@/constants/Colors";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

import { Collapsible } from "@/components/Collapsible";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const cronogramaData = [
  "- sexta-feira, 19 de julho",
  "05:00h Chegada das Delegações na AFA",
  "11:30h Almoço (SOMENTE PÚBLICO INTERNO)",
  "13:30h Reunião de Abertura (1ª parte)",
  "14:00h Reunião de Abertura (2ª parte)",
  "15:00h Treinamento para a Cerimônia de Abertura (SOMENTE PÚBLICO INTERNO)",
  "16:00h Cerimônia de Abertura",
  "16:45h Futebol (Jogo 1)",
  "19:15h Evento de Abertura (SOMENTE PÚBLICO INTERNO)",
  "- sábado, 20 de julho",
  "06:30h Orientação (Saída dos Ônibus)",
  "08:00h Esgrima Feminino (Sabre Individual)",
  "08:00h Esgrima Masculino (Espada Individual)",
  "08:00h Orientação (Percurso Escola)",
  "08:00h Pentatlo Militar (Tiro Controlado)",
  "08:30h Atletismo (Dia 1)",
  "11:30h Esgrima (Finais)",
  "14:00h Esgrima (Espada Equipe)",
  "14:30h Natação",
  "19:00h Basquetebol (Jogo1 - AFA x AMAN)",
  "- domingo, 21 de julho",
  "08:00h Esgrima Feminino (Florete Individual)",
  "08:00h Esgrima Masculino (Sabre Individual)",
  "08:00h Pentatlo Militar (Tiro)",
  "08:30h Atletismo (Dia 2)",
  "10:30h Esgrima (Finais)",
  "13:00h Esgrima Feminino (Florete Equipes)",
  "13:00h Esgrima Masculino (Sabre Equipes)",
  "14:30h Polo Aquático (Jogo 1: AFA x EN)",
  "17:00h Culto",
  "17:00h Espírita",
  "17:00h Missa",
  "19:00h Basquetebol (Jogo 2 - EN x Perdedor Jogo 1)",
  "- segunda-feira, 22 de julho",
  "06:30h Orientação (Saída dos Ônibus)",
  "07:00h Judô (Pesagem)",
  "08:00h Esgrima Feminino (Espada Individual)",
  "08:00h Orientação (Percurso 1)",
  "08:00h Esgrima Masculino (FloreteIndividual)",
  "09:00h Tiro (Pistola de Ar)",
  "09:00h Pentatlo Militar (Pista de Obstáculos)",
  "11:30h Esgrima (Finais)",
  "14:00h Esgrima Masculino (Florete Equipes)",
  "14:30h Polo Aquático (Jogo 2: AMAN x Perdedor Jogo 1)",
  "16:00h Futebol (Jogo 2 - AFA x Perdedor Jogo 1)",
  "19:00h Basquetebol (Jogo 3 - EN x Vencedor Jogo 1)",
  "- terça-feira, 23 de julho",
  "07:00h Judô (Repesagem)",
  "09:00h Pentatlo Militar (Lançamentos de Granadas)",
  "09:00h Tiro (Carabina de Ar)",
  "13:30h Judô (Equipes)",
  "14:30h Polo Aquático (Jogo 3 - AMAN x Vencedor Jogo 1)",
  "19:00h Voleibol (Jogo 1 - EN x AMAN)",
  "- quarta-feira, 24 de julho",
  "06:30h Orientação (Saída dos Ônibus)",
  "07:00h Judô (Repesagem)",
  "08:00h Tiro (Fogo Central)",
  "08:00h Orientação (Percurso 2)",
  "13:30h Judô (Individual)",
  "15:00h Pentatlo Militar (Natação Utilitária)",
  "19:00h Voleibol (Jogo 3)",
  "- quinta-feira, 25 de julho",
  "06:30h Orientação (Saída dos Ônibus)",
  "08:00h Orientação (Percurso Reserva)",
  "08:00h Tiro (Fuzil Standard)",
  "09:00h Pentatlo Militar (Cross Country)",
  "15:00h Triathlon",
  "16:00h Futebol (Jogo 3 - AFA x Vencedor Jogo 1)",
  "19:00h Voleibol (Jogo 3 - AFA x Vencedor Jogo 1)",
  "- sexta-feira, 26 de julho",
  "08:30h Reunião de Encerramento (SOMENTE PÚBLICO INTERNO)",
  "09:30h Treinamento da Cerimônia de Encerramento",
  "10:45h Cerimônia de Encerramento",
  "11:30h Almoço de Confraternização (SOMENTE PÚBLICO INTERNO)",
  "13:30h Regresso das Delegações",
];

export default function HomeScreen() {
  const safeArea = useSafeAreaFrame();
  const [showPhones, setShowPhones] = useState(false);

  const togglePhones = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowPhones(!showPhones);
  };

  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowMap(!showMap);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        backBackgroundColor={{
          light: Colors.light.background,
          dark: Colors.dark.background,
        }}
        headerImage={
          <Image
            source={require("@/assets/images/banner.jpg")}
            style={styles.bannerImage}
          />
        }
      >
        <ThemedView
          style={[
            styles.titleContainer,
            { paddingHorizontal: 32, paddingTop: 32 },
          ]}
        >
          <Image
            source={
              theme == "dark"
                ? require("@/assets/images/logoDark.png")
                : require("@/assets/images/logoLight.png")
            }
            style={[
              styles.navamaerLogo,
              { width: safeArea.width - 64, height: (safeArea.width - 64) / 5 },
            ]}
          />
        </ThemedView>
        <ThemedView style={{ paddingHorizontal: 32, gap: 12 }}>
          <ThemedView style={[styles.stepContainer, styles.firstStepContainer]}>
            <ThemedText style={{ textAlign: "justify" }}>
              Navamaer é uma competição entre as três escolas de formação de
              oficiais de carreira das Forças Armadas do Brasil: Escola Naval
              (EN), Academia Militar das Agulhas Negras (AMAN) e Academia da
              Força Aérea (AFA). Ocorre anualmente, e tem como principal
              objetivo estreitar os laços de amizade entre Marinha, Exército e
              Aeronáutica.
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle" style={styles.subtitle}>
              AFA 2024
            </ThemedText>
            <ThemedText style={{}}>
              Este ano a competição será realizada na Academia da Força Aérea,
              localizada em Pirassununga - SP, de 19 a 26 de Julho de 2024.
            </ThemedText>
          </ThemedView>
          <Collapsible title={"Mapa"}>
            <Image
              source={require("@/assets/images/mapa.jpg")}
              style={styles.mapImage}
            />
          </Collapsible>
          <Collapsible title={"Telefones Úteis"}>
            <ThemedView
              style={{
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 12,
                shadowOpacity: 0.4,
                shadowRadius: 8,
                marginTop: 8,
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: colorReactiveInverted,
              }}
            >
              <ThemedText>Oficial de Dia AFA – (19) 3565-7031</ThemedText>
              <ThemedText>Médico de Dia AFA – (19) 3565-7171</ThemedText>
              <ThemedText>Posto CAN – (19) 3565-7152</ThemedText>
              <ThemedText>
                Prefeitura de Aeronáutica YS - (19) 3565-7226
              </ThemedText>
              <ThemedText>
                Águia (autorização de acesso nos portões) – (19) 3565-7812
              </ThemedText>
            </ThemedView>
          </Collapsible>

          <ThemedView
            style={[
              styles.calendarContainer,
              styles.stepContainer,
              {
                shadowColor: colorReactiveInverted,
                minHeight: safeArea.height / 2,
              },
            ]}
          >
            <ThemedText type="subtitle" style={styles.subtitle}>
              Cronograma
            </ThemedText>
            <WebView
              nestedScrollEnabled
              source={{
                uri: "https://calendar.google.com/calendar/u/0/embed?height=300&wkst=1&ctz=America/Sao_Paulo&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&hl=pt_BR&src=bHZpLm5hdmFtYWVyLmFmYUBnbWFpbC5jb20&color=%23039BE5",
              }}
              style={styles.calendar}
            />
          </ThemedView>

          <ThemedView
            style={[
              styles.stepContainerPatrocinadores,
              {
                padding: 12,
                borderRadius: 16,
                backgroundColor: "#fff",
                shadowColor: colorReactiveInverted,
                shadowOpacity: 0.4,
                shadowRadius: 8,
                elevation: 5,
              },
            ]}
          >
            <ThemedText
              type="subtitle"
              style={[styles.subtitle, { color: "#252728" }]}
            >
              Patrocinadores
            </ThemedText>

            <Image
              source={require("@/assets/images/patrocinadores.jpg")}
              style={styles.patrocinadores}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    alignItems: "center",
    alignSelf: "center",
  },
  titleContainer: {
    alignItems: "center",
  },
  stepContainer: {
    gap: 8,
  },
  firstStepContainer: {
    marginTop: 12,
  },
  navamaerLogo: {
    objectFit: "scale-down",
    height: "auto",
  },
  patrocinadores: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
  },
  stepContainerPatrocinadores: {
    marginVertical: 20,
  },
  subtitle: {
    textAlign: "center",
  },
  calendarContainer: {
    height: "auto",
    paddingTop: 8,
    borderRadius: 16,
    overflow: "hidden",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  calendar: {
    flex: 1,
  },
  phoneHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  phoneHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  phoneListContainer: {
    padding: 16,
    borderRadius: 16,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    marginTop: 8,
    borderWidth: 1,
  },

  mapHeader: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 16,
  },

  mapHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  mapImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 8,
  },
  boldText: {
    fontWeight: "bold",
  },
});
