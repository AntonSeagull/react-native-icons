

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbApiApp = (props: IconProps) => {

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
          <Path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
          <Path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" />
          <Path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" />
          <Path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" />
        </G>
      </Svg>
    );
  }

