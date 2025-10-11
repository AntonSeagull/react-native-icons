

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBearLeft = (props: IconProps) => {

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
          <Path d="M13 3h-5v5" />
          <Path d="M8 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
        </G>
      </Svg>
    );
  }

