

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTopologyBus = (props: IconProps) => {

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
          <Path d="M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M2 16h20" />
          <Path d="M4 12v4" />
          <Path d="M12 12v4" />
          <Path d="M20 12v4" />
        </G>
      </Svg>
    );
  }

