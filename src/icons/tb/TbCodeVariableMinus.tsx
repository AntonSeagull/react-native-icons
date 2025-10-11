

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCodeVariableMinus = (props: IconProps) => {

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
          <Path d="M12.5 16h-6.5a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
          <Path d="M16 18h6" />
        </G>
      </Svg>
    );
  }

