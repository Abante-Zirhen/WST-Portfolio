function scrollToSection(SectionAct)
{ 
    const section = document.getElementById(SectionAct);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
}
