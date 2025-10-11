

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScubaDivingTank = (props: IconProps) => {

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
          <Path d="M8 11a4 4 0 1 1 8 0v5h-8z" />
          <Path d="M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3" />
          <Path d="M9 4h6" />
          <Path d="M12 7v-3" />
          <Path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </G>
      </Svg>
    );
  }

