

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImicWand = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M4 3l-2-2h-1v1l2 2zM5 0h1v2h-1zM9 5h2v1h-2zM10 2v-1h-1l-2 2 1 1zM0 5h2v1h-2zM5 9h1v2h-1zM1 9v1h1l2-2-1-1zM15.781 13.781l-9.939-9.939c-0.292-0.292-0.769-0.292-1.061 0l-0.939 0.939c-0.292 0.292-0.292 0.769 0 1.061l9.939 9.939c0.292 0.292 0.769 0.292 1.061 0l0.939-0.939c0.292-0.292 0.292-0.769 0-1.061zM7.5 8.5l-3-3 1-1 3 3-1 1z" />
        </G>
      </Svg>
    );
  }

