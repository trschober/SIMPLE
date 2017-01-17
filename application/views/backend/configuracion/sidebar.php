<ul class="nav nav-list">
    <li class="nav-header">
        General
    </li>
    <li class="<?=strpos($this->uri->segment(3),'misitio')===0?'active':''?>">
        <a href="<?=site_url('backend/configuracion/misitio')?>">Mi sitio</a>
    </li>
    <li class="<?=strpos($this->uri->segment(3),'plantilla_seleccion')===0?'active':''?>">
        <a href="<?=site_url('backend/configuracion/plantilla_seleccion')?>">Plantillas de Simple</a>
    </li>
    <li class="<?=strpos($this->uri->segment(3),'modelador')===0?'active':''?>">
        <a href="<?=site_url('backend/configuracion/modelador')?>">Configuración Modelador</a>
    </li>
    <li class="<?=strpos($this->uri->segment(3),'recursos_generales')===0?'active':''?>">
        <a href="<?=site_url('backend/recursos/index')?>">Recursos Generales</a>
    </li>    
    <li class="nav-header">
        Accesos Frontend
    </li>
    <li class="<?=strpos($this->uri->segment(3),'usuario')===0?'active':''?>">
        <a href="<?=site_url('backend/configuracion/usuarios')?>">Usuarios</a>
    </li>
    <li class="<?=strpos($this->uri->segment(3),'grupo')===0?'active':''?>">
        <a href="<?=site_url('backend/configuracion/grupos_usuarios')?>">Grupos de Usuarios</a>
    </li>
    <li class="nav-header">
        Accesos Backend
    </li>
    <li class="<?=strpos($this->uri->segment(3),'backend_usuario')===0?'active':''?>">
        <a href="<?=site_url('backend/configuracion/backend_usuarios')?>">Usuarios</a>
    </li>

</ul>
