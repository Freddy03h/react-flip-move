import React, { Component } from 'react'

import FlipMove from '../../src'
import ItemTransform from './ItemTransform'

const baseStyles = {
  listTransform: {
    display: 'flex',
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class ListTransform extends Component {
  constructor (props) {
    super(props)
    this.state = {
      itemOpened: null,
    }
  }

  openItem = (key) => {
    this.setState({ itemOpened: key === this.state.itemOpened ? null : key })
  }

  render() {
    return (
      <FlipMove
        style={baseStyles.listTransform}
        easing="ease-in"
        duration={300}
      >
       {
          prophecyList.map((volume) => {
            return (
              <ItemTransform
                key={volume.key}
                onClick={this.openItem.bind(this, volume.key)}
                opened={this.state.itemOpened === volume.key}
                volume={volume}
              />
            )
          })
       }
      </FlipMove>
    )
  }
}

const prophecyList = [
  {
    key: 'prophecy-1',
    title: 'Prophecy',
    subtitle: 'Tome 1',
    img: 'http://ecx.images-amazon.com/images/I/51qnheKFVwL._SL270_.jpg',
    resume: 'La section de lutte contre la cybercriminalité de Tokyo est sur les dents. Un individu coiffé d\'un masque en papier journal poste sur Internet des vidéos menaçantes, où il prédit les pires crimes : incendies, agressions, viols. Le problème ? Dès le lendemain, ces prédictions se réalisent à la une des journaux télévisés.',
  },
  {
    key: 'prophecy-2',
    title: 'Prophecy',
    subtitle: 'Tome 2',
    img: 'http://ecx.images-amazon.com/images/I/51P2C3FSHPL._SL270_.jpg',
    resume: 'C\'est le début d\'une traque contre la montre qui mène les enquêteurs du siège vide d\'un cybercafé de la banlieue de Tokyo aux bureaux froids de ces entreprises où, tous les jours, des employés sont tyrannisés par leur hiérarchie. Et sur Internet, contre toute attente, le soutien populaire grandit autour du mystérieux personnage.',
  },
  {
    key: 'prophecy-3',
    title: 'Prophecy',
    subtitle: 'Tome 3',
    img: 'http://ecx.images-amazon.com/images/I/51vT6ZrNQCL._SL270_.jpg',
    resume: 'Alors que le Net est en effervescence, le mystérieux homme au journal fait une nouvelle victime. Cette fois, sa cible se retrouve passée à tabac en direct sur un site de streaming, à la grande joie des internautes... Mais l\'étau se resserre peu à peu autour du criminel.',
  },
]

export default ListTransform
