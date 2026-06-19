type featureType = "first_mile_bridge" | "route_path"

export function UseMyMap() {
  const styleFeature = (feature: {properties: {type: featureType}} | undefined):   L.PathOptions => {
    if (!feature) {
      return {};
    }
    switch (feature.properties.type) {
      case 'first_mile_bridge':
        return {
          color: '#ff5722',
          weight: 5,
          dashArray: '5, 10',
          opacity: 0.8
        };
      case 'route_path':
        return {
          color: '#2196f3',
          weight: 6,
          opacity: 0.9
        };
      default:
        return { color: '#9e9e9e', weight: 3 };
    }
  };

  return {
    styleFeature
  }
};