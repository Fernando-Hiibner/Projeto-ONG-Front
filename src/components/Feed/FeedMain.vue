<template>
  <v-container fluid=true>
    <v-row>
      <v-col
        cols="12"
        md="3"
        class = "mt-0 pt-0 ml-0 pl-0"
      >
        <v-list
          rounded
          tile
        >
          <v-list-item-group
            v-model="leftMenuSelectedItem"
            color="primary"
          >
            <v-list-item
              dense
            >
              <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Convidado</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="(item, i) in leftMenuItems"
              :key="i"
              dense
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <!-- TODO Pensar em outros placeholders pra por no lugar disso, esses são muito travados -->
        <v-card>
          <v-card-title>Placeholder</v-card-title>
          <v-skeleton-loader
            v-bind="attrs"
            type="article, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="table-heading, list-item-two-line, image, table-tfoot"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="card-avatar, article, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="date-picker"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar-three-line, image, article"
          ></v-skeleton-loader>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="3"
        class = "mt-0 pt-0 mr-0 pr-0"
      >
        <v-card
          elevation="0"
          tile
        >
          <v-row align="center" class="pr-2 pl-2">
            <v-card-title>Contatos</v-card-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-wechat</v-icon>
                </v-btn>
              </template>
              <span>Chat em Grupo</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
              <span>Pesquisar</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <span>Opções</span>
            </v-tooltip>
          </v-row>
        </v-card>
        <v-list
          rounded
          tile
        >
          <v-list-item-group
            v-model="rightMenuSelectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in rightMenuItems"
              :key="i"
              dense
            >
              <v-list-item-icon>
                <div class = 'd-flex align-center'>
                  <v-avatar
                    size="36"
                  >
                    <v-img :src=item.avatar></v-img>
                  </v-avatar>
                </div>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text" class=""></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: 'FeedMain',
    data: () => ({
      leftMenuSelectedItem: 0,
      leftMenuItems: [
        { text: 'Duplinha Inseparavel', icon: 'mdi-account-multiple' },
        { text: 'Panelinha', icon: 'mdi-account-group' },
        { text: 'My Little Hasbro', icon: 'mdi-store' },
        { text: 'TV COM SETA', icon: 'mdi-youtube-tv' },
        { text: 'Hora de Placeholder', icon: 'mdi-clock-time-five-outline' },
        { text: 'Marca Pagina de Burgues', icon: 'mdi-bookmark' },
        { text: 'Rary Porta', icon: 'mdi-deathly-hallows' },
        { text: 'Aqui tem coragem', icon: 'mdi-account-cowboy-hat' },
        { text: 'CHAPEU!', icon: 'mdi-redhat' },
        { text: 'CAIO LINDO!', icon: 'mdi-lipstick' },
      ],
      rightMenuSelectedItem: 0,
      rightMenuItems: [
        { text: 'Pessoa/Ong 0', avatar: 'https://img.quizur.com/f/img5dc7788c9ff4f9.88368659.png?lastEdited=1573353617' },
        { text: 'Pessoa/Ong 1', avatar: 'https://i.pinimg.com/736x/e9/29/7d/e9297de90f1957b0c2c81521a143bb0e.jpg' },
        { text: 'Pessoa/Ong 2', avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBUVExcTFRMXGBcZGhobGxkaGRoaGhkdHBgfGRocHxkaHysjGhwpHSEcJTUkKCwuMjIyGyE3PDcxOysxMi4BCwsLDw4PHRERHTEoIygzMTMxMTExMTExOTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAQsAvQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAECB//EAEYQAAIAAwQHBQQIBAMIAwAAAAECAAMRBBIhMQUiQVFhcYEGEzKRoUKCscEjUmJykqLR8AcUsuEkM8IVQ1Nzk6Oz8WPS4v/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAECBQb/xAAsEQACAgIBAwMDAwUBAAAAAAAAAQIRAyESBDFBIlFhcYGREzKhBSMzsfAU/9oADAMBAAIRAxEAPwD1tFjopujlWjq9hCqqgSo4pG2FI3ejA3wjOitGgIy7HV6MvRKRKRq7HJEQW23pLpeOJyAFSfLIcTQcYovpcHK6vM326qmr+eNrE5L0ougrGRRkNMYVJYcggB3ausR5xq0SJjf7xhwGr6rQ160jX6MiqL8ZAabZGA1p84U2X2HqPF5mNdzM9i0TBSlRWW/nfUxf/nl7koNRkCpNpnDAgTOJAlnrQnyuiJU0otbrIyn3fTGp6CMPFJeCUEIyIpU5WrQ4jMZEc1OI6xLGCjIyMjIhDTGmJipKtys1KEVyJ/eESaQP0bdPUwLs0sl1A2kf3hzp8EZwcpCPUdROGSMIeQ5GRt1oYjmTAuJIHOFOLuh5uu53GRyrAioNRHUUTuZGRkZEIYI2I0I3GSGncAEkgAZk4ARyhJBY1VRjShvEcs15Z8soHM5mDvSbsoH6MUxbdMofaJ8A2DWzIu2bGpreOZwC1r0xzO0nhwhrHi1bCIgtcqWzX2SlcAAKu1OC/rzgPpSwTGGLCzJsVAJk5ubNVJfQP96G5ZdMcycz8hwiJ0BzArB4yopoRJ2ipQFWlGZU1vTmaaSaZ65Kg/dAgzoc1U3u6QZKolhmAG2tAqjhQ84v6dmS5cu/MJugigGbMclUbWO7nzCtPkzbS6yamUj492h1llilWmPmzZALlVhnSpKnyRBjNvkYyxPxOHhw8goHlSBMnTDo7WcALQ3u9W6VKUxoTkxOGIwAbdGprDCRZ5aSpCUDTAis70/4d4EYfXYGpyFMYI2SVZkDgg6wusJju9QQaijEqMK5AZ0ikkl2KNyNLpdBp3aEVAIeZNavtXFGoDmC1Sa4qIo6RtaTDSVMRyuamqzFrvFMOoEW5ekJYmiVL1QwN0492zAVKFT4SQCQwzoa1wB4tuihOmDVIANccChp7DjGX7uB3GoMRUnshd0ZLBRVOtTmCtfqkYruqDQ0gnKByJrubAHkQMOo8t9LR+qRLbGmCOQA2VSjgYB6Y4YMMRBSWuyAzipPZZyy0zjVI7ZruB8O/dz4cYx0pyhWeNx2iOJT0l/lnp8Y60TZLovN4j6D9YmmKDgeHoaxK7YAQSGbjBxF1gj+r+o/C0Rz3GLHIfKAbsztkSTsGyDFol3lK7/hEtmlKi4AD9+sbwZIxtvuwefBLPJJuku5DZLOUTHPM8KxLHc2ZXCOIBkkpSbGFBRSjHsjIyMjIwWZFHSE7KXtbxfdyp7xw5BqGoEXSYVNKz3WeauykrfwoSAXKSxjhQXGNN7GCYo27fgLhxSySUYh3ve8n92PDKF4/eJKqOQo3lBFeHKFDs3pK4bQrEM93vFbYwVQtDxDGuzxHdBqfpqVL1FvzGAFVQAkVFcSxAvbxWuMNsJLBOMuNbDCvSOZrDM4D4DfArROmFmkqysjAFqNdoFFAcVY79sd6cq8gyxUGaRLG8BjQk+7UxSWwc4yg+MlQKsUv+amNaple6SokplqjxTD9pt+wAAe0TLouxEhmPim4sfqyhUIo+9rN7zcIKWiSFkd1LwBCotNgJC18qmLVmk0FBgPhhQDoAB0i3L2Mgu1WZQZUpRgzkneVVSTj964ORjVr0QrZGmfz/UeUEZ8n6VG2BZg8yn6GJglYnJkF+X2eGJL1alVNMFYYo3QgGDV8ChOFaDHZXIeeHWLZlDZFO1Se8lvLrQkEA/VagZW6Gh6RHJvuVR1Ps94VAx+NDUV64g5g47wZbO9c8CM4g0JbhNkpMIoSMRtB2g8axPMYA1OFSB5mg9cOsZNHRmA1WmWYO45Hln6xRtOkEs4+lYiXkjUZj9w3QSSMwdor9Ukz2s3R3n1c+K+15Z9OMR6VsST5LynOq4wYZqc1ZTvBoRyiUXFrlvsV5Gm7O9bsw03sjoo951AgjHn2jLPNDiRMb6W93bXcMDhfG8Xdeu6PRRJAwGA3QvPFv0h+q6eGNri7tWRRWtNsVTTM7hsi1NWmEVho9GO0dT84mKMOVTv7HOyrJVY6v5I5FvViAQRXLbFyOJOjUU1xJ2VMdzFxi88I3cOxeKOVR/uVfwZGRkZAQhDaWyUbfh/7pCDpRy1tngtgt0cluAivCpPnDyDUs/Gg5Kbv9ZPSkJ/bnRKO0yat8TSiqLrlQ7nVlhqbLzKOsO4o1GhrpsqxTUmhStmmJcqbMVQpUjBlJFxmqHNMSAKKac98H7BKeWSTNBlirLRccqiuJrzizoDshZybVKKfRB+7BqS30aBSwY43i98n9Io2DRFqQ/ywRnRh9FNukqqE0N5sgRjqnHdWogkkq0dLB1sZyfOl7DH2Gk940yewqAe7TmKM53HG7jvB3QwWp6zKbVTDg0xri/vjEtgsySpaykFFUUA+Z3knEnaSYF6Pn35rk7ZgHRQ7j1AjKV7OXny/qTcgveF4JTIV5YgD5+USA0gVLtFXntu7uWOpJPq3pBSI1QIhnWikyWh9oP+W6fnE6v84E6Um3bTZQfaM0de7BEEJD1vc/kPnWI1pFE5c74hU6x4gH1IPyjDMowXeCfIgH4xGray8nHkR+hiqLAWgrXctdrsmRVxNTiJq97XlfMxfdEMU5BMllakBlwO0VGBHEHHpCB2sLSdMSbSp1TIRJg+z3xW9hsWY0mvBjuh8s0wYgZeIcmx+N4dItu9ltUastoMySHwDUxGwOpuuvIOCIraGnh0aWMDLNBXYpxl+WXuxRe2iXNtEjOtyao3CYt1h+NHb3oi0dPuWhG2TAUb72anzBHvRpR0ygzMSXflz2TWUEXvqg4NXfTHkL0FIHDxOlaZMOFf/wBAnrE9hn3hQ4EYEbiMx8xwgbRpS8M27VMajuctDWOITkmnsG+5lYyMjIooyIbXMKoSM8lG9iaKOrECJor2jF5a8S54hRQD8TKfdi4q3REQ2wBERRkGRanM0+eEUbZKvz5S0wvK55pVwfxIkW9OmiKdzg+QMcWMVtJP1ZdPxMKf0mH12s2W7LZgqsowvNMY82YmvwiSyDUWn1R8IyytVVO8A+YrGWP/AC1+6PhFFEohOsNopUg5hvMXVPxMOKwgaFaur9XvB/3BG8XksYdFg9yzHN5wPqv94O1gLYZg/l6//J8D/aI7Jbz3xXFifZXEjGuOxcAcyIqSuyAX+IukmlWuwXcld2bcAwEpK7gXNIO6H0mt12c0NL1Np1mJoNuYhe7Q2F7W1oqwQECUl2jNWTrhr5FFAm1rQV1MDEeiZYSXqAi+oqSSWauIvMxLHqYmNqacfY3KDik/cLDSjs6udhbDgwAp0oIJi10SW/8Azm9TT4iF5UwidJhKhdgvepFfhBZRQOirbvpZ8tnW8DKnSyN4cymp+WCejNMAd2l6rAGWQ2Dn2kYg0OIqctsVUT6aXwWYf6V+cTaTsVx1YgFJiISDiL0sgkU3lGc+7C0pJZK8DPG8XyUdJ2o/7QlV/wB5JdKfda+v+vzi3OJGWYII5g1HqBAjtRZrlos01arccA0OADuqGgNQM90G58uGFJUgDjQwTJovypgycEdGAZfWMmIVmXwdVxRhuZcmHG7WvBfMWk7/AA6b5c2nkCw9CPKL+kbSUaUwxVzdHB6X5eOwNRkP3xAmigtLeoocxn+vKI3Whis0wLddcUIqPukVI6DWHIjCLhxw2jLjC+SNlyVkcZGRkLgzIq2dr02afq3JfUL3hPW+o92LUD9ETR3JmE4M0yZX7LOSn5KDpBcKuRaINNzKqODkeSj9YzQjgtMc7Ain3Uv/AOsxVtLVlg73Ynibq1PI58or2S1XZVp5TKf9JQPWHUrjo0HdDTL8iU/1paHzUGLElaKBugd2Se9Y5B/+NfTCCgjD02ijced6OYifalPszJ1P+qwGfACPQQ+FeNOt678YQJhK6UtMo+2Ay8mWQT+YzPKN43VkQR0fNLJMl1oFnsKD7l7xZ7dlIuy37lWdQKgEIu92wUU8yeAMDOz6ETJtfbntMpwImSl8xKr1ghbXW8KsFVSBeOV4mg8q+ZA2QPJkSsYx4+Tot9nbMqi6SGIW7nixOLt1JihLsVwsh9l2HSt5PyFYN6Ptsg0RJqk5AE0LU3V8XSObdLpMJ2FQeoqD6BYBjnTsJl9WgNZ5FVBjqwSKqDvr8TFqyuFk94clDt0BJ+UV9EKZNkQzfEq63FiaUHNjTrBnlBrGZ3FWDU9ig981/wBIgppazl5JqBqnCmxaXW5m6W84xEVbtSAASak0wRQCa7ADXGE7tH20acxkWGTMnbGm0cSaVukqFFZg4khTTCsAqUpWgjkopJl3tKl9XNPAiN1Bv/Er5wStS61OB+UIFg7SWmWWkWmQKsoRyF7twSousVyIJC4igxHCHy2TB34Tb3bN5uoguPkpNMzkcXFUcK9Jbr9uWR1qp+UEreneWJ8aFZZZTtVpesh81EDbRgnvL/UtILaNUvZ5iDM31HvLh6mGJdrFmWNA2tbRIDDJlVxTZe1sPuuGA+7HejmIBRsGRrvTNacKYDbQCAXYJu7MyT7MuayrsHdzUW0SuigsvMmGKdLPfgjJpbXuaOt0+TN6QvkWmkW1aJ33xzG13RqFHvZhlfSM0pKmOM1RiOYUkesCrUpSTLs6GhcrLBGxVAqRyFW90wS0qKyiN5QebqD6RRsS37SzezKQAbr7n4hQRymQbE+MXIiI9LAAXQKAOQBuHdpQeULukZpWTaSM7wAHFklgDqT6ww6bFCeMwn/tS4XNKSr9F2NMkt1lTgT5i4OkO4v2o0Hv4czr1ilDaqgfvrWGANiRCf8Awze7LaSfZZ1/C5I/KYbHakxeII8sYzkXqZRqapq6jNheXmMD63T1MI2nn7vSyTj4JlnDDiVLlhzpSHjSFQBMHsGpG9cm9MekJX8ULK5lSp8o60qYcQKm5MAYUAzF4AcqxlOtm4K2Ce0XaqXZJlxSJk0KgYKaBbqzMWfJcZlaYnEYQqjTlttTIVdhiWQSwERWU0xZ9ZqAk3gSK3duIM9nuy1kFnW226cXkiZWoLMripqz3Req03V4j70L/aLSEu0WorILS5QKS7PcBloqk1a8lK1rhQUrSsTHjj52byZZO60N3Z6ZbxLM5f8AFLfo6d4s1arSqnbLbioNMM49FWeHly5gRlwIuP4hUVoTU1xUCtdsJH8IzOl2ifZ5xqWUzF1FSoluJbOSACxYtTHHUByIj0q6Ds/ecBzQUZaLhNtJt2BrJZD3SS9xAPEq1aeY8gYkNnvKoI1Vuk8WwHkK+dNxgtSNlYCE5CX/ABKmyEs1ydOANL38uHCvaM9U4hu7vkE0zu04R552T0lNW1yJXdVZJyBWoUKJNcS3vKGxF1jRa7Buh/8A4i6Cl2m0WczQe7uzEBBoFdqEVNRmMRXD6MjMxz2a7PSJU6VKR738uO8Y4MDUm7e1tRy+sM6iWRhQQ7i4xx3YrOVzUaLv8RdD95JUqB3hYSw9KFVeoYk1FAvirXCnGBOgJ7T7ZaXxKIJcsMcK5scNh8s8cRDj2htarJmPS9cVmC5ksAaADaSaAcSIU+zElbHZC8xg8ybMd8P945FNX7OqWrsBrAoScpMYceMN9whbpgNVH/EQD3dc/wBJgx2fybofiPlC1ouWxYs+JqBzY6z+RN3o0M2hEoOlPJ2/WGJ6iLsFlTKtKEA0nWUAUy7yyOGQc2WYw5SxDUCCQwxqMDwOP6QF0xZy0mVNXBpM2+ORLS26Uavuxd0TNvSVIwu1Wm4Kbq/lAPWF56jZp6LTihjUdzthjiFJKnQN9yG2UuknZj5RV0FKuy2Y+KY7Of6B+VViTS7Ulkb8POJrINQfvM1gnbH9yeALpl6zCNx+Kr+kCpSB5aE7w4PWvqKjrFrSUyjTW3M/5RT5RSlNSzA7pVfJKx0cSqC+xoh7P2i5ONPqypnMlbjfvjDZpCcA0pwdUlT0xB/qXyhEsb0nSqnxKZfmKj4esMMq095JC+0pYAbjkR0cA+cayQ9VkGsiA1plgOJDist1ZRyOIHCmsOTLBSwzr8tH3qP7xFpGyCahWtDmrbVIyMKvWmXB7AcrQUqdYp9hYXQWIYCtFe8HSYBWoBIVqAiuO8wt6I0VIQJLtsgJNlEFVVSEJWg7yUUA7xGoGpjQkgjZDe04oRPOBAEucBsx1X5A7dx+zHVsmtXCBLNLHaGX0yzbuih2ZkA2mdaWkGXqiVKZrys0snvJhMtvBV7uYB1TllDUphfkK5Ig5ZgaQN5HOVs3LDHHFJE0bJjUYREBHM1QQQQCDmCKg9IDz5aShdly1QE1oihRXfRRBukQTZAMZkmExtRexV01OJVZdaFmvdEo1eNGuYQC7PKJoVyDRKyxU1oEYqEXcuAy+MGO2U5UnSkGYlTW6F5Q+ULn8P2JSZU4GbOYcBVF+N6HOmx1HkY6iak9DfotAzgAYAk/mPzg7YVpUfaf+v8AvAjs0tWY/vxvBVZl0TGHs3yPM/pG8j3QsTpKv2e79dD+cH9YF9mZ1VccVccnS6PVDB6zywqqoyUAeQpC5oXVnvL4TBtylzAo9GgMtwZcuwwHIcI4jtMiI4hWfhmGDNOtgo5nyK/rF6zDUXkPhAvtHMAMsH2rwHPVb4AwTsbVRDvVT5gQR/419WTwKOmnuy55+1O/8jRBNwsjcJJ/8cc9oXBs8w7HPo8yo+MZpM0scz/kt/446UF6UjQDtU26C2XdhX/CSfgPWDsqbdmGnhmKJi88Fcf0H34XLc9FmnYJfyY/MRZ0Tae8kGWhvTrMahdrrShHG8pZdwam6CzRSHzsragyvL2o1R91tYdBiOhgw0ef6L0oJcyVaFNZcwBG5E1Qnk1VpvfhD6jg0INQwwPqPSvlCmWFOyIEdoRMRWeWoZ7pKqcphGLSzwdajgaHZEWgLYkxQBWlAQCakClRQ+2Ke0MxxDAGbZJvKQM81O4jKEeVp2TZrQ1mtBuK57yUx2XmOGGKFWDJUYUQYitIUnHyOYpWmh6konskGmGG+LAhfXtVZAP84ufso7V8lp1jT9q5WyVNPMIP9VfSLjim+yAT6jHF+qS/IwwO/wBsy+87oXzStXCnu1psL+lRhU0rWK7WwWmShl1uM5WYBiy0BqjXchepXhwMSS7PddNXVN5WypRhgCDvYL6xh60Ggoyhyv6BRHBFR+6YGK9sL0quFGG7EEY5jKp9IrNOMtmahKjxgAk0pg4AxOAoRngDzkk2jvJPeEEXiSAaVADUXImmAB6xl7RFGmjyzSmlzaNIzXoVVJMyUoOBok1LxI2EuW6ARf7AJSQh+sgb/qMZnxYDyin2s0Y0u3zmUUWbJLKaYBpjKrY7ddWbqIcOx1gUWSYxAuuborlcl6oH47w6COjzjDEmgTTcthLsqtVrvRPV5h+cWhNAZVPtzKeTtMryqUX3o77NoBKBoBqrQZUFL2XWOZlm7yUzL4lYhecs3G8yD5DdA27bMNBqFsLS2tTIkj8UtXP5lrByxz78tX3jHnkfWBLr/ix92/0oU+JECk6TXwypMLSszHEdSs45MLP9qMeAB2uQ1szbpzV5GRN+YESG2d3Yb4OKp3YP2lPdV8xWJO1a/QB/qTZR6M4lsfwu0LWmrSwldzsMwuOVwC7zv3j1EM4Yc4pez/gvwQaUH+HlLv7seSV+Ub00/wDgZhG2T8VEa02KJKTca/hS7/qiLSsz/AjKpSWo54D5HyMPrwU3SAjkMs0ULXywujdTu+gN0nrC80ufKfvVJEwEm8pxqc6g0wO6GvRMigrvi5abKrjEY7DtEEezmz62SlpaFjQ+nUdnlzRcWbUstLtxjmw2BScajAHHDGPQuxWlWKtImGsyUajjTEgcGGI+8RshA0vojeOTD48DHOg7dMkOrElu7Ix293uO8KcQdxIpkYxKNqmNYupjk+Ge4BqioyOIhJ/iLZjLKWlfDeuPwv0FfxBeVX2mGjQdsWYoocCKim5sR0B9KRPpqwpNlPImCqTFKnYcswdjDMHeIT/bIclHlFx9zya3WmYjS+6WoYeEKDVq4g9Kbd8WNH2iaJMybPF2hN1SADQD5nARHZ1eRN7uZ40vI2FASDQkDYCRUcCN8XZ4WdNSUf8AKVWnTT9hPCvVqYbgYZb4pys5EIOc1h4q/L86YT7B9oLNLso1nLM7tMIlTCC5ONLqmtBdFciQYIaV7cyJam4HdgRg0ubLFMyQXQXqDYtcaZDEefJpMpJlJKpUqCTQVqReOGVakxAgJJLksxzJx6coAunUtyY9LrOPpSXwev6UtYkzpTk6kxu7Y7AWFUYndVaV3uIm0uxlWV2QAECqimAJaoFBsxyhd0vakn6Plqk2UZplyTQsuDalaivOD2mrQqyUVGDDvJQreBwVw2Y26sJ6R00nJoF6TswtkhJkugmA6gY4axAdDTcQDX7O41g6ZCypCyhW6iAcTdFa8yceZin2e0ciPMmITcLaqYXQwwcqNg9nhQjICm5Ns7yZMx1VYXfu08XVg/QCJKfpUfBFC5MsCesqVNmN4ZYqfclqD6ikZ2OtBazqGNXHiO8sL5PKrEdIEdpbK7WNiXypMZQBRgriYSaiuwkY4AKKZxJ2OmFHWW3tKV95CWT8hbyENRqUW0Bkg3YzdMyX9V6jgGF4CI5KXpzzNigSxxobzeuHSI7ZOuT3yqyClcgRtP2QASeAi1Y0uoBj1zx3/a38awvlVO/cDInTMRqNrtMagXgz4KmmLKZsibKBoXR1B3EqQp6Gh6QpgibKV7p1kvqMiCyYA1yxI8odqwjaPtQZ5svIo7ED7DMSOgN5afZENdJe0XErdoTroNysfxMB/pgJpG03u6k/ULsebO13qE9Hgzp8fSL/AMtf6mPzhYlt9OxO1vhqj0FY6CWkL9TKoMYLMlABFgCI5USiNHDZHOQEUOUL+mLEZf0iioGY4bRyhjdhkYG2u9LxOvKOe0p+q/CIaxyaegl2K0qAgFahTQH7Jxunjt/9Q9NMvpgamlVPEYj9OpjyLs2AlpeRerLmIbpGzapHHPqIeOy2kzduOcVJQ8GU0PQ5wrlh5R6bpprJjTK/bywCYqT1FLwAJ3NTVrzGqeSQv9lrM06z2q543LSjXcEoFrs8Rx4w/WuSHSbJOIILjkcSBu1vjCH2EmtJttoszeGbemId7Idan3lNfchfI24UvAXHijDNzruqEiYjS3MtgyshIo2YxPnurwixbLSe6ZlO71IEOHb+fIn3UQEzJbGswABaUIZK5vjQ4YVXPMQmaQsSrLat6mYpU7fqjCld8NYpSlDaOZnhCOd8Xq/+RSsLgUqB5Q06M0hgAGIoQQK1WoxGqcITpBgpZ5tMoFOCkPQm49j1nR3apHRJLrcYkJqglX3AUqVJyod+BMG1sag97MAQAYioFR9sg0pwx+UeLC1VFDkdhhz7HaaeeWkz3eZ3agoMyUGqS212BK6xxow3ElWePirGYT5Ou1jclqEyaQ4ojrdUHaK0YHcxBBpnQcDA2TPuThLqTNlstUA1mpQ1AOakGl7IXsSIMaPliYaBfo1G0UqTsAOwDbxhX7fz+7tQuMUbuV1lJDYtMHiGNaGJhk1fyTMldIapbiZaACAT7ZGQu6yywdtGxY7SANhALFcaR5v2U7WyZcylpJQUojKjMtThS6gJTDcKV3VAh9sWmJE7/KmKzUqVNVcDfcYBgOkbywTV+wpKvJac7N0ajIyFW7Bsr6Re7Kc8PjhCtoyxKLMk4jXd3x3g4UO8alRuqd5qd7UTLshuNfRSflFKYlJFmT7AbqFAP9ZhzDqK+X/otCxps/TMNwUD8I+dYBW2TRZcwbVWvlWC9tmXprk/WPkDQegiGagNnWv1F/pEdCWuIDqFcSewTLyAxavQM0L4Iv1jRxZKmAtLzZ6zWF4XDimGFKCoJGNa19IyyaRmZMB8RBuagYUIqIqTkoKOt5frUqR94Z04jrENJprsB51nMqdKnJgneph9UMReHLxUglJtRl6SnSCcJqpMl1yvBAhHW6fzQPtD6rI2S0INajDWUg7arTHjE3buzkTltCeKWJfTWenTYeDQKe2jr9Jk4Y232TX8j5ZNI1CPtU0O8r7QPEEecInbJSloUy2Kusx1VlNGCsjXiCMRqkio2sIPWW1gtLmD/LnqCPszLt4cqqCOajfC5p171pmH6guDmaM/pc8jA1Bfk6GfJWPkitZ9ZgooBF+dZlLIGyNVruOY+cBpJINdsMgk97LGwmhHAwdI89lbTsqWHQsuXMLGWjXtpUGhGRAOR39IF6c0fZC5dXusSAyAlQTleA2HKuzbzbrHWlG8Q9eMdWuxpM8ctHpleUEjkTlEcV4MRzyUrk3+ReldnpTSvo2YNsJNehG7iIk7FMZFpmFpRaYsq6AGpgzgkj62C7P1oelSAooMoE9o5c0SzMs8xkmLjhSjgYlSpwbaRXbzMCzY+UHx7jnRdZxypTdo9Ak6blS0AUEnE0wFKknE7I8r7S6e7+0TZlcDluAUBRToK+9AjSXaydPS4FSWtNYrUlvPIcPjAgzITxY5LcjtZskG/R+QrMnhssYcuyVtrKkTASClyu+q0B8x8Y8ymzmHhB4mnpzj0TQsky5HGhPpDkF3OV1k/wBv1PZDK4xE4phHGh7es+UJibcCNqkZg/vEEHbE87OOfkgkONKrQvdsW+iI+y58hGaSmBSoOUuUCeRJ/wDpG+1S1Wm9HHmIp9o3vGcN92UOTKAPzTDB8S9MfuRCrbEIrXA6inmQqn1ilpGcwVJQGZK9AaDzFIZZtlvicaeGXOmdQpAHm1fdhbs7mZOaYclLKvIMaHyMOKXJ17C3VvjAJWWXdULuEdTmoCd0bFaYZ7KxqW4eqkUamKnPpvHEQQ4rKNl0hVqNhXbF8xTtOja+HOI7LamU3Jnn+8xEN6fY7tVhRiGAANQSMg9CDQ4GlaUrTzji0zhNMy8pAbC6c1ooUg7K+0CMDew3xccwMtOkEALYlVFWwyFcTxAzPCsZaXcLDJNw4eLI9HTCLBNRjRrPNqDwDrMB9WEUJEy+C59pmbzYmK+kbUCJ8tTUTTLAptpeqeVKjrFmwyyFCnYIykdDJluEY/GyCWsH9CWjC4SOECQmsYuWWys/hEERz8tPuMgEd0ijZDMRBeW911gPnF4NhXLnEE2iG0vQADxMaD5nkBU9I4nrhHUlCzGYd1FG5d/M/CnGNzoha0eb6a0NQkqaUam43dnOgp5RJ/smWl0VZ3OS1AB4tQYKIMadIE8rsZB54/KIrCAFrSrYKx2kjAfr1gbirOpDLLjtlHRWj7826aEKccMKg7tmPwh2SVq04UgboWw92KnM4nnBlMMY2lQllycmWeyOkDZ5oDH6OZdDblPsv8jwNdkeiFRHmSywUAI2D4Q7dlLcZkgBjVkNwk5mgBU8TdIqd9YWz413Oj0GfknCXjsQdoVwQ8x50PygSyFzjtcP5PfXyovlDHpGTflkbcxzH7p1hc727Vt3rRSaekBwSTh9B+GyWSoSzW2cchLdR7ktiTT7zEe7CNohLstBwEO/adDL0TMAzKS7xpnfmLf9CYQNGWmoAOYg3TO7l7sR653QwSTEjyw2Y5bxyOYirZni6hhs48tEZVhkQeefmP0itPW94pZ5gg09QfSLxERzBFEiwXep/lm8NstsD0JxHIwEterepXbgc8RkR6Qx2pFYGtCfWF62NiM61AGPHLlnhFMZxOwZoTR1wYmrHadg3fvfB6XLiOyJti2ixVVpB5SctsqhNY84ZLDLAQUgAZRLGLci3OlEC3ycht58o0K5YthstSNZ55fH+0Q2dCBec623cP7RsWgE0XHjsiC5OTFae8du8L2nrdSkoHWmVHJRi58sBxPCI3QTHjcnQGtbl2abXAnV4gZHkcSOBEG9GSFuq9MSK/sRQscm8wGwfAbIOSxGaGMkvCLEkRzbLRiJSnEmjcBu5xLKEVNEWajsx9moHM/2+MaF/kLGGPsQlRNbZVV6gFj6MIWmMNPZ2xOJCujXS9Wam0ZIfwgQLM9UN/0+HLJ9gxCdpql5gcAZyL0aZdy5GHGFeeFM43hVe9Ff+pdr0Jr0jnYH3+h2cfkO6VsCWqzzJJYhZi0vLQ0xqrCuBoQDHiVokvKe62BxofZYA0JHD4R7DMs8yVjLeoJACnaTkKHA88ISdN2JXlFW9mZgRmtUBqDvy51hrp0ktOweTEskQRonSAbVODDMQckTITJlmYeLBlYgOtQDTI8KihpsrtgtoTSJaqv4l274bTONmxOLYyViK0oSKA0MVntiqMT02wNtukWbDwjcMz1iwEYNshnuysQTiNxrAWZar84U8CE1O9yCKDkCfOLTsTNWVVRewA55fvLGKg0NNQkFqqSTrAg1OZvCoMZlbY7j4xT9xglgUFI7LhRUkAbzAyQs6WANUrsrWvnF/RMiXNcs+LilFOKim0A4HkRti0jMpJInsqPM8Aup9dhn91czzNBzggiypIoASze87fvyi0gjYUVrQVO3bFic5uXcoMkyZ4hcTdtPOLKIFFBHc1wMzEbNEKRBb54RST++EK05DXvG8RYEndgVCjgK/E7TBnSMy+wUZDE84p25PoyRsofLGKY3iXFfUjsc2hg5IxxELcs4wZ0c9BFmMqCtDSgziWRLCKAP/Zjiz5VMdzGixZkdpm3VJ3AnyFY9DkzRLAW7qgAKBsAFKR5naXyH1iF8zT5x6YTC2fwdf+mxpSZLCvaZQ7+ZLatGZgeTi9hu8VOkNEBe0Um6Vnj2aK3KtUPIMSD96uyOfhlUq9zoY3Ui1oueZroG8UtWvj7fgrTYCpLDgwhU0hK+jYHMy5Uz/tqD6oYZrNOVGE8eBgFmfZAOq5+6SQeBrWiwHtyVOOambKfhde8g/A9eUNY3xdIPxrQj2hABNrjVlYcKoqf6a9YE2GZdnH7X6VgvpJKXgc6AfhLV+IgA0ykxeR9cIbXc5HUx9bCsyYc9pjBhz2mKkm0q70U1ujE7KnAY7cL3nE96NJ2LONaAMpSJjO3tNgd2OH6dBDjonSV4BXNG3nbAbREtWqzAGpOByzgt/Kqw3HfFJUZyvk9hcqDmAecRLo6XW8AVO9WIiORNuCjnrElk0lLdritrbiCMs6bDGhd2WVkt/wARutP0iSh3xrvI0ZkWDIWk41rENpmAKT7IBJO002Dhxjvvg+R1cvvfoPjyzoaVn1og2kDpmfQHzimFhG3RBZ7PebHrT4couaWQdyw2AfKOrClBWM0w30L/AHT8IgS7khdTHGC2g0qTXZSBlm8A30gzoNLqV3n4YfGsUjWTUQuDEE54004ZVxiraJsaFkjiUS9okoP+NK8hNUn0j0OyWmZemAKzgNsphiQM+AHkYSuxljaZaBN9iViTvYjVUfHoN8ej6HlgKzDNnevRivyr1hTNL1Hc6KHHFfuSxxNlhgVYVBFCOEdxkcwMJs21NZZzq+MoHxHw3TSgfYudA2WPSJLSmN5MZbhc81ZAQtePd1Wu1VXGo1jNrQfzSCmDghhsYEUoRtyhVtUhZGkP5WULkhpMxzLBN0MpF26D4AMwq0AONKw5F7X0GYyukwR2rkEVcDMXsPJh8/KFO4DQkVj0zTElSq4e0PnCMtkS9NW7gJrACpwGdM+MORdoT6uHkD6LkGWGB2t6DAfPzi8Hi8LGn1fU/rGv5VN3qf1jXZaEWuTtg7RT0WnH+8F7POiGzWVKHDa20/WPGLkuypu9T+sWmZnC2WFmAihxEQ2WzS0a+BrbDurE6SF3epjvuF3epi7F3A01oiOdaaKTwjtpC7vUxxaLOtMvU/rF2RY0VrDNuoefyEV5DX5l45Cqjz1vUAe6YktMsLKmMuBCEg1OBAOMWrLY0AQXcABtP6xV7CcKTZcl5QM7WWi5Z23sVUdSAfSvlB4SF3epgVpuyI0yUrLUXiaEnMI2MVJ6KxR9asDSFYIC2DEZbuEXpdpJASXsFC5yG+m8xYtVkQuurt3n9YlMhaZepi4ujWSNsrK4UUBqdpOZifRdhmWh6Lgg8UwjBeA+s3DZtphWM2ZaoKeJlBxORah24dI9BlWdEVURQqgUAGAEYyTrSD9L00ZvZzYJCSZQRFN1dmbMee1iflDHYpVxFU4kAVI2naepqYCyFHfSxTDE04hLw9cfKGCFJPZ1u2kf/9k=' },
        { text: 'Pessoa/Ong 3', avatar: 'https://www.24hnoticias.com/thumb/19/8/8/b/88b99c0868596e0510b317cf645238e2.jpg' },
        { text: 'O CAIO!/Ong 4', avatar: 'https://pbs.twimg.com/profile_images/697773527924142080/GN9iYFeW.jpg' },
        { text: 'O CAIO!/Ong 5', avatar: 'data:image/jpeg;base64,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' },
        { text: 'Pessoa/Ong 6', avatar: 'https://cdn.discordapp.com/attachments/709579519341887633/903122265636479006/vlcsnap-2021-09-29-14h38m44s138_2.png' },
        { text: 'Pessoa/Ong 7', avatar: 'https://cdn.discordapp.com/attachments/709579519341887633/903122378685566996/1829933__safe_artist-colon-zylgchs_derpibooruexclusive_autumnblaze_soundsofsilence_spoiler-colon-s08e23_cup_hoofhold_kirin_liddedeyes_simpleback.png' },
        { text: 'Pessoa/Ong 8', avatar: 'https://cdn.discordapp.com/attachments/709579519341887633/903122441352646666/1543558803288.png' },
        { text: 'Pessoa/Ong 9', avatar: 'https://cdn.discordapp.com/attachments/709579519341887633/903122987350364190/NNXYE1757.JPG' },
      ],
    }),
  }
</script>
