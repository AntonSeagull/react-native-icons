

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderEpicene = (props: IconProps) => {

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
          <Path d="M15.536 15.536a5 5 0 1 0 -7.072 -7.072a5 5 0 0 0 7.072 7.072z" />
          <Path d="M15.536 15.535l5.464 -5.535" />
          <Path d="M3 14l5.464 -5.535" />
          <Path d="M12 12h.01" />
        </G>
      </Svg>
    );
  }

