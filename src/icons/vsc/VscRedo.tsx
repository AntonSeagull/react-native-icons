

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscRedo = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12.5 2v3.5L12 6H8.5V5h2.521l-.941-.941a3.552 3.552 0 1 0-5.023 5.023l5.197 5.198-.72.72-5.198-5.198A4.57 4.57 0 0 1 10.8 3.339l.7.7V2h1z" />
        </G>
      </Svg>
    );
  }

