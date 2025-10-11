

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlBackward = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M6.719 8.474l7.281 6.097v-12.135l-7.281 6.038zM13 12.429l-4.719-3.951 4.719-3.914v7.865zM3.281 8.478l5.54 4.639-0.643 0.768-6.46-5.41 6.462-5.358 0.639 0.77-5.538 4.591z" />
        </G>
      </Svg>
    );
  }

