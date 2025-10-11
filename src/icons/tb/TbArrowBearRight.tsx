

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowBearRight = (props: IconProps) => {

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
          <Path d="M12 3h5v5" />
          <Path d="M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93" />
        </G>
      </Svg>
    );
  }

