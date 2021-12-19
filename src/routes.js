import Anasayfa from "./pages/Anasayfa.vue"
import saydamLens from "./pages/saydamLens.vue"
import gunlukLens from "./pages/gunlukLens.vue"
import renkliLens  from "./pages/renkliLens.vue"
import toricLens from "./pages/toricLens.vue"
import indirimliLens from "./pages/indirimliLens.vue"
import solusyon from "./pages/solusyonlar.vue"
import gozBakim from "./pages/gozBakim.vue"
import kampanyalar from "./pages/kampanyalar.vue"


export const routes = [
    {path : '/', component: Anasayfa},
    {path : '/Anasayfa', component: Anasayfa},
    {path : '/saydamLens', component: saydamLens},
    {path : '/gunlukLens', component: gunlukLens},
    {path : '/renkliLens', component: renkliLens},
    {path : '/toricLens', component: toricLens},
    {path : '/indirimliLens', component : indirimliLens},
    {path : '/solusyon', component : solusyon},
    {path : '/gozBakim', component : gozBakim},
    {path : '/kampanyalar', component : kampanyalar}
];