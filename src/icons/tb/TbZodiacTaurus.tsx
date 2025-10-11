

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZodiacTaurus = (props: IconProps) => {

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
          <Path d="M6 3a6 6 0 0 0 12 0" />
          <Path d="M12 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
        </G>
      </Svg>
    );
  }

