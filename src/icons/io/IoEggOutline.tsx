

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoEggOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M256,48C192,48,96,171.69,96,286.55S160,464,256,464s160-62.59,160-177.45S320,48,256,48Z" />
        </G>
      </Svg>
    );
  }

