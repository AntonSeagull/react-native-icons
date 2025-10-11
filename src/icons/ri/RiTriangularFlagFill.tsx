

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiTriangularFlagFill = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M5.66056 2.18123C5.01456 1.61285 4 2.07155 4 2.932V22H6V18.0002H20.9896C21.9116 18.0002 22.3423 16.8584 21.6501 16.2494L5.66056 2.18123Z" />
        </G>
      </Svg>
    );
  }

