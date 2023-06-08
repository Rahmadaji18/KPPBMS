<template>
  <h1>Latest Projects</h1>

  <section class="projects-section padding">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-8 col-md-6">
          <div class="section-heading mb-40">
            <span>Projects</span>
            <h2>Discover the most fascinating <br />projects for our clients</h2>
          </div>
        </div>
      </div>
      <div id="projects-carousel" class="projects-carousel box-shadow owl-carousel">
        <div class="project-item">
          <img src="@/assets/images/prj1.png" alt="projects" />
          <div class="overlay"></div>
          <a href="@/assets/images/prj1.png" class="view-icon img-popup" data-gall="project"> <i class="fas fa-expand"></i></a>
          <!-- <div class="projects-content">
            <a href="project-single.html" class="category">Interior</a>
            <h3><a href="project-single.html" class="tittle">Rectangular house near italy</a></h3>
          </div> -->
        </div>
        <div class="project-item">
          <img src="@/assets/images/prj2.png" alt="projects" />
          <div class="overlay"></div>
          <a href="@/assets/images/prj2.png" class="view-icon img-popup" data-gall="project"> <i class="fas fa-expand"></i></a>
          <!-- <div class="projects-content">
            <a href="project-single.html" class="category">Architecture</a>
            <h3><a href="project-single.html" class="tittle">Cathedral of brasilia brasilia</a></h3>
          </div> -->
        </div>
        <div class="project-item">
          <img src="@/assets/images/prj3.png" alt="projects" />
          <div class="overlay"></div>
          <a href="@/assets/images/prj3.png" class="view-icon img-popup" data-gall="project"> <i class="fas fa-expand"></i></a>
          <!-- <div class="projects-content">
            <a href="project-single.html" class="category">Design</a>
            <h3><a href="project-single.html" class="tittle">Harpa concert hall reykjavik</a></h3>
          </div> -->
        </div>
        <div class="project-item">
          <img src="@/assets/images/prj4.png" alt="projects" />
          <div class="overlay"></div>
          <a href="@/assets/images/prj4.png" class="view-icon img-popup" data-gall="project"> <i class="fas fa-expand"></i></a>
          <!-- <div class="projects-content">
            <a href="project-single.html" class="category">Architecture</a>
            <h3><a href="project-single.html" class="tittle">Milwauke museum wisconsin</a></h3>
          </div> -->
        </div>
        <div class="project-item">
          <img src="@/assets/images/prj5.png" alt="projects" />
          <div class="overlay"></div>
          <a href="@/assets/images/prj5.png" class="view-icon img-popup" data-gall="project"> <i class="fas fa-expand"></i></a>
          <!-- <div class="projects-content">
            <a href="project-single.html" class="category">Design</a>
            <h3><a href="project-single.html" class="tittle">The dancing house prague</a></h3>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "latestProject",
  props: {},
};
</script>

<style scoped>
h1 {
  font-size: 64;
  color: #002855;
  margin-top: 47px;
}
</style>
