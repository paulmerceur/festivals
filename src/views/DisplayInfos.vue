<template>
    <div class="page">
      <PageHeader></PageHeader>
    </div>
  <div class="body">
    <div class="info-container">
      <h1>Festival de jeu-vidéo</h1>
      <h2>Informations</h2>
      <p><strong>Emplacement :</strong> Centre des congrès de la ville</p>
      <p><strong>Dates :</strong> 13 au 16 août 2023</p>
      <p><strong>Tarifs :</strong> Billet journée : 25€ | Billet week-end : 60€</p>
      <p>Réservez vos billets directement sur place.</p>

      <h2>Activités prévues</h2>
      <ul>
        <li>Plusieurs tournois de jeux-vidéo, incluant les jeux les plus populaires tels que Fortnite, Overwatch et League of Legends</li>
        <li>Conférences sur les nouvelles technologies du jeu-vidéo, présentées par des experts de l'industrie</li>
        <li>Zone dédiée aux jeux indépendants, où vous pourrez essayer des jeux créés par des développeurs indépendants talentueux</li>
        <li>Espace de rencontre avec des développeurs de jeux-vidéo, pour discuter avec eux de leur processus de création et des défis qu'ils ont relevés</li>
        <li>Exposition de cosplay, où vous pourrez admirer des costumes incroyables inspirés des personnages de jeux-vidéo, et vente de produits dérivés dans notre boutique</li>
        <li>Stands de nourriture et de boissons, pour vous restaurer et vous désaltérer pendant votre journée de jeux-vidéo</li>
        <li>Animations et spectacles, pour divertir les visiteurs tout au long de la journée</li>
      </ul>

      <h2>Comment nous rejoindre</h2>
      <p>Le Centre des congrès de la ville est facilement accessible en voiture, en transport en commun et à pied. Vous pouvez consulter notre site web pour des indications détaillées sur les meilleures options de transport.</p>
      <p>Nous sommes impatients de vous accueillir pour une journée ou tout le week-end de jeux-vidéo amusants et passionnants !</p>
    </div>
  </div>
</template>
<script>
import PageHeader from '@/components/PageHeader.vue';
export default {
    name: 'DisplayInfos',
    components: {
        PageHeader
    },
}
</script>

<style scoped>
h1, h2 {
  text-align: center;
  margin: 10px;
}

.info-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
}

ul {
  list-style: disc;
  margin-left: 30px;
}

a {
  color: #0077c2;
}
</style>