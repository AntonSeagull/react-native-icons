

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgEditStraight = (props: IconProps) => {

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
          <Path  d="M12 4C15.866 4 19 7.13401 19 11H5C5 7.13401 8.13401 4 12 4Z" fill="currentColor" />
          <Path  d="M5 13H1V11H5V13Z" fill="currentColor" />
          <Path  d="M19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13H19Z" fill="currentColor" />
          <Path  d="M19 13V11H23V13H19Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

