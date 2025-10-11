

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const DiHtml53dEffects = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#444444" d="M16.957 6.062l-5.808 1.88 12.58 4.070v8.027l-8.383 2.711-7.074-2.287v-7.863l6.836 2.213 5.808-1.879-12.598-4.077-3.622 1.172v13.036l10.649 3.445 11.958-3.869v-13.23z" />
        </G>
      </Svg>
    );
  }

