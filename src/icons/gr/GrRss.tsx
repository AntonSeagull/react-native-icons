

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrRss = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="none" d="M22,21 C22,10.5065898 13.4934102,2 3,2 M17,21 C17,13.2680135 10.7319865,7 3,7 M12,21 C12,16.0294373 7.97056275,12 3,12 M4,23 C5.65685425,23 7,21.6568542 7,20 C7,18.3431458 5.65685425,17 4,17 C2.34314575,17 1,18.3431458 1,20 C1,21.6568542 2.34314575,23 4,23 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

