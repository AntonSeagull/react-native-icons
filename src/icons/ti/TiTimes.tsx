

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiTimes = (props: IconProps) => {

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
          <Path d="M17.414 6.586c-.78-.781-2.048-.781-2.828 0l-2.586 2.586-2.586-2.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l2.586-2.586 2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c.781-.781.781-2.047 0-2.828z" />
        </G>
      </Svg>
    );
  }

