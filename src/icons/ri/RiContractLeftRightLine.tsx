

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiContractLeftRightLine = (props: IconProps) => {

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
          <Path  d="M18.793 5.79285 12.5859 12 18.793 18.2071 20.2073 16.7928 15.4144 12 20.2073 7.20706 18.793 5.79285ZM5.20695 18.2072 11.4141 12.0001 5.20695 5.793 3.79274 7.20721 8.58563 12.0001 3.79274 16.793 5.20695 18.2072Z" />
        </G>
      </Svg>
    );
  }

