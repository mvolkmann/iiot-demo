import React, {Component, PropTypes as t} from 'react';
import Diagram from './diagram';
import Filters from './filters';

import boothShapes from './booth.json';

class Tabs extends Component {
  static propTypes = {
    filter: t.string.isRequired,
    limits: t.object.isRequired,
    manifolds: t.object.isRequired,
    selectedTab: t.string.isRequired
  };

  getBtnClass = id => this.props.selectedTab === id ? 'depressed-btn' : '';

  getContent = () => {
    const {filter, limits, manifolds, selectedTab} = this.props;
    return selectedTab === 'facility' ?
      <div>The facility view is coming soon!</div> :
      selectedTab === 'department' ?
      [
        <Diagram
          filter={filter}
          key="diagram"
          limits={limits}
          manifolds={manifolds}
          shapes={boothShapes}
        />,
        <Filters
          key="filters"
          filter={filter}
          limits={limits}
          manifolds={manifolds}
        />
      ] :
      <div>invalid tab</div>;
  };

  onClick = event => React.setState({selectedTab: event.target.id});

  render() {
    return (
      <div className="tabs">
        <div className="tab-buttons">
          <button
            className={this.getBtnClass('facility')}
            id="facility"
            onClick={this.onClick}
          >
            Facility
          </button>
          <button
            className={this.getBtnClass('department')}
            id="department"
            onClick={this.onClick}
          >
            Department
          </button>
        </div>
        <div className="tab-content">
          {this.getContent()}
        </div>
      </div>
    );
  }
}

export default Tabs;
