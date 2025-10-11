

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowDownDashed = (props: IconProps) => {

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
          <Path d="M12 5v.5m0 3v1.5m0 3v6" />
          <Path d="M18 13l-6 6" />
          <Path d="M6 13l6 6" />
        </G>
      </Svg>
    );
  }

