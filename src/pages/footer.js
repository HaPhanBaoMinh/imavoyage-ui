import React from 'react'

function Footer() {
    return (
        <div className='w-100 py-5 bg-light'>
            {/* Remove the container if you want to extend the Footer to full width. */}
            <div className='container d-flex'>
                <div className='row w-100'>
                    {/* ---- */}
                    <div className='col-2 d-flex align-items-center justify-content-center bg-light'>
                        <div
                            className={`bg-primary rounded-circle d-flex align-items-center justify-content-center`}
                            style={{ width: '130px', height: '130px' }}
                        >
                        </div>
                    </div>

                    {/* ---- */}

                    <div className='col-10 row bg-light p-0'>
                        <div className='row w-100 p-0 m-auto'>
                            <div className='col-3 h-fit bg-light'>
                                <p className='fw-bold'>Nos engagements</p>
                                <ul className='list-unstyled'>
                                    <li>100% carbone absorbé</li>
                                    <li>Tourisme responsable</li>
                                    <li>Agir pour un Tourisme responsable.</li>
                                </ul>

                                <p className='fw-bold'>Qui sommes-nous ?</p>
                                <ul className='list-unstyled'>
                                    <li>Où nous trouver ?</li>
                                    <li>L'Esprit Voyageurs</li>
                                    <li>Le voyage sur mesure</li>
                                    <li>Notre valeur ajoutée</li>
                                </ul>
                            </div>

                            <div className='col-3 h-fit bg-light'>
                                <p className='fw-bold'>Autour du voyage</p>
                                <ul className='list-unstyled'>
                                    <li>Librairie Voyageurs</li>
                                    <li>Magazine Vacance</li>
                                    <li>Le Mag web</li>
                                    <li>Application Mobile</li>
                                    <li>Listes de mariage</li>
                                    <li>Chèques cadeaux</li>
                                    <li>Avis clients</li>
                                    <li>Voyages d'entreprise</li>
                                    <li>Conditions de vente et assurances</li>
                                </ul>

                                <p className='fw-bold'>Nos maisons</p>
                                <ul className='list-unstyled'>
                                    <li>Le Steam Ship Sudan</li>
                                    <li>Satyagraha House</li>
                                    <li>La Flâneuse du Nil</li>
                                    <li>La Villa Nomade</li>
                                    <li>La Villa Bahia</li>
                                </ul>
                            </div>

                            <div className='col-3 h-fit bg-light'>
                                <p className='fw-bold'>Idées voyages</p>
                                <ul className='list-unstyled'>
                                    <li>On part où ?</li>
                                    <li>Voyage de noces</li>
                                    <li>Vacances en famille</li>
                                    <li>Week-end en amoureux</li>
                                    <li>Vacances d’été</li>
                                    <li>Croisière</li>
                                    <li>Voyage de luxe</li>
                                    <li>Tour du Monde</li>
                                    <li>Déconnecter</li>
                                    <li>Plongée</li>
                                </ul>

                                <p className='fw-bold'>Idées voyages</p>
                                <ul className='list-unstyled'>
                                    <li>Fondation d'entreprise</li>
                                    <li>Carrières</li>
                                    <li>Relations investisseurs</li>
                                </ul>
                            </div>

                            <div className='col-3 h-fit bg-light'>
                                <p className='fw-bold'>Top destinations</p>
                                <ul className='list-unstyled'>
                                    <li>Japon </li>
                                    <li>Italie</li>
                                    <li>Egypte</li>
                                    <li>Australie</li>
                                    <li>Afrique du Sud</li>
                                    <li>Indonésie</li>
                                    <li>Etats-Unis</li>
                                    <li>Brésil</li>
                                    <li>Grèce</li>
                                </ul>
                                <p className='fw-bold'>International</p>
                                <ul className='list-unstyled'>
                                    <li>voyageursdumonde.be </li>
                                    <li>voyageursdumonde.ch</li>
                                    <li>voyageursdumonde.ca</li>
                                    <li>originaltravel.co.uk</li>
                                    <li>originaldiving.com</li>
                                </ul>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer